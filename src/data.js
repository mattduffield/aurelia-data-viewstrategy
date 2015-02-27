import {ViewStrategy} from 'aurelia-templating';
import {HttpClient} from 'aurelia-http-client';

var hasTemplateElement = ('content' in document.createElement('template'));

/**
Loads a given view by Web API. 

@class DataView
@extends Aurelia.Templating.ViewStrategy
@param viewUrl {Object} View URL
@param [isCompiled] {Boolean} If true, will not attempt to use SystemJS plugin loader (i.e. no '!' suffix)
**/
export default class DataView extends ViewStrategy {
  static inject() { return [HttpClient]; }
	constructor(viewUrl, isCompiled, http) {
		this.viewUrl = DataView.parseViewUrl(viewUrl, isCompiled);
		this.http = http;
	}

	/**
	Generates a `DocumentFragment` from a given peice of HTML

	@method loadViewFactory
	@param viewEngine {Object} ViewEngine instance to utilise when loading the view
	@param options {Object} Template compilation option
	@return {Promise} Promise returned from `ViewEngine.loadTemplateResources`
	**/
	loadViewFactory(viewEngine, options) {
		return this.http.get(url).then(response => {
			// Evaluate the client template method and generate a `DocumentFragment`
			template = DataView.generateFragment(response.response);

			// Taken straight from the `viewEngine.loadViewFactory` method
			return viewEngine.loadTemplateResources(this.viewUrl, template, this.moduleId).then(resources => {
				let existing = viewEngine.importedViews[this.viewUrl];
				if(existing){
					return existing;
				}

				let viewFactory = viewEngine.viewCompiler.compile(template, resources, options);
				viewEngine.importedViews[this.viewUrl] = viewFactory;
				return viewFactory;
			});
    });
	}

	/**
	Generates a `DocumentFragment` from a given peice of HTML
	
	@static
	@method generateFragment
	@param html {String} HTML to generate a `DocumentFragment` from
	@return {DocumentFragment} A new DocumentFragment representing the parsed HTML string
	**/
	static generateFragment(html) {
		let doc = document.createDocumentFragment();
		let div = document.createElement('div');
		div.innerHTML = html;
		while(div.firstChild) {
			doc.appendChild(div.firstChild);
		}

		if(!hasTemplateElement) {
			HTMLTemplateElement.bootstrap(doc);
		}

		let template = doc.querySelector('template');
		if(!template) {
			throw new Error('There was no template element found');
		}

		return template;
	}

	/**
	Parses a given view URL, appending optional `!` plugin loader suffix when enabled.

	@static
	@method parseViewUrl
	@param moduleId {String} Module ID to convert
	@param isCompiled {Boolean} If true, will not attempt to use SystemJS plugin loader (i.e. no '!' suffix)
	**/
	static parseViewUrl(moduleId, isCompiled) {
		return moduleId + (isCompiled ? '' : '!');
	}
}
