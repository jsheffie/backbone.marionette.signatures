// The idea here is that you can cut-n-paste these 80-col comment sections
// into your code while you are writting it.
// Note: I wrapped these in functions, just so code folding would work 
//       a text editor: For ease of reference
//
// Backbone [v1.1.2]
// Backbone.Marionette [v2.1.0]
var BackboneSignatureComments = function(){
	/*
	 .---------------------------------------------------------------------------.
	|     B a c k b o n e [v1.1.2]  M e t h o d o d   S i g n a t u r e s         | 
	|`---------------------------------------------------------------------------'|
	|  model local      |   model server    | collection local  |collection server|
	|.---------------------------------------------------------------------------.|
	| m.get()           | m.fetch() 'change'| c.create() C.R.U.D| c.fetch()       |
	| m.set() **'change'| m.save()    ""    | c.get()           |   `-> c.parse() |
	| m.unset() 'change'| m.destroy() ""    | c.add()/set()     |     `-> c.set() |
	| m.clear() 'change'| m.sync()          | c.remove()/reset()| c.sync()        |
	|.---------------------------------------------------------------------------.|
	| m.values(), m.keys(), m.pairs(), m.invert(), m.pick(),m.omit(),m.attributes |
	|.---------------------------------------------------------------------------.|
	| m.escape()        | m.id, m.cid     | m.url()        | m.previous()         |
	| m.defaults        | m.idAttribute   | m.changed      | m.changedAttributes()|
	| m.extend()        | m.toJSON()      | m.has()        | m.previousAttributes(|
	| m.initialize()    | m.parse()       | m.hasChanged() | m.clone()            |
	| m.isNew()         | m.isValid()     |                |                      |
	|.---------------------------------------------------------------------------.|
	|     Backbone collections listen for 'change' 'add' or 'remove' events       |
	|.---------------------------------------------------------------------------.|
	| c.extend(), c.model, c.models, c.initialize(), c.comparitor(), c.toJSON()   |
	|.---------------------------------------------------------------------------.|
	|  c.push()/pop()   | c.shift()/unshift | c.sort()     | attribute_methods    |
	|  c.slice()        | c.where()         | c.pluck()    | c.groupBy()/countBy()|
	|  c.at()           | c.findWhere()     | c.clone()    | c.sortBy()/indexBy() |
	|.---------------------------------------------------------------------------.|
	| c.forEach()       | c.filter()        | c.min()          | c.tail()         |
	| c.each()          | c.select()        | c.toArray()      | c.drop()         |
	| c.map()           | c.reject()        | c.size()         | c.last()         |
	| c.collect()       | c.every()         | c.sortBy()       | c.without()      |
	| c.reduce()        | c.all()           | c.groupBy()      | c.difference()   |
	| c.foldl()         | c.some()          | c.shuffle()      | c.indexOf()      |
	| c.inject()        | c.any()           | c.first()        | c.shuffle()      |
	| c.reduceRight()   | c.include()       | c.head()         | c.lastindexOf()  |
	| c.foldr()         | c.contains()      | c.take()         | c.isEmpty()      |
	| c.find()          | c.invoke()        | c.initial()      | c.chain()        |
	| c.detect()        | c.max()           | c.rest()         | c.sample()       |
	|.---------------------------------------------------------------------------.|
	|          `bind v.render() function to the model's 'change' event'           |
	|.---------------------------------------------------------------------------.|
	|  V.model          | V.className       | ***v.render()***     | el view.el   |
	|  V.collection     | V.tagName ('div') | v.remove()           | $el view.$el |
	|  V.el             | V.events          | v.setElement()       |view.$(sel)   |
	|  V.id             | v.extend()        |   `- 'this.el'       |template      |
	|  V.attributes     | v.initialize()    |                      |  `-convention|
	|.---------------------------------------------------------------------------.|
	|   Backbone View Methods that get overriden by Marionette.View               |
	|                  v.delegateEvents(), v.undelegateEvents()                   |
	 `---------------------------------------------------------------------------' 
	*/
}

var MarrionetteTitleForNotes = function(){
	/*
	 .---------------------------------------------------------------------------.
	|                                                                             |
	|     MarionetteJS [v2.1.0] Method Signatures                                 |
	|                          and some other helpful notes                       |
	|                                                                             |
	 `---------------------------------------------------------------------------' 
	*/
}

var MarionetteViewNotes = function(){
	/*
	 .---------------------------------------------------------------------------.
	| Marionette.View                                                             |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain                                                          |
	|    Backbone.View -> Marionette.View (base class)                            |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|    'show'         | 'before:destroy', 'destroy'                             |
	|.---------------------------------------------------------------------------.|
	|  Class Options: templateHelpers, triggers, modelEvents, CollectionEvents    |
	|.---------------------------------------------------------------------------.|
	| v.getTemplate()         -> template: pageTpl                                |
	| v.serializeModel()                                                          |
	| v.mixinTemplateHelpers()                                                    |
	| v.normalizeUIKeys()     -> @ui. syntax within a given key for triggers and  |
	|                                 events                                      |
	| v.configureTriggers()   -> triggers: maps DOM events -> view events         |
	| v.delegateEvents()      -> overides backbones method to support 'triggers:',|
	|                            modelEvents:' and 'collectionEvents:' options    |
	| v.undelegateEvents()                                                        |
	| v.onShowCalled()        -> handles internal 'show' event (gets overridden)  |
	|.---------------------------------------------------------------------------.|
	| v.onDestroy()           -> 'you can specify an 'onDestroy()' method in your |
	|                             view to add custome code that is called after   |
	|                             the view is destroyed.                          |
	|                             Note: remember.. re-rendering a layout view WILL|
	|                             destroy all of its views on the 2nd render      |
	|.---------------------------------------------------------------------------.|
	| v.destroy()             ->  'destroy' remvoe the view from the DOM and      |
	|                             unbind it. regions will call this method for you|
	| v.bindUIElements()      -> ui hash to jQuery selectors                      |
	| v.unbindUIElements()                                                        |
	| triggerMethod: normalizeMethods: getOption:                                 |
	| bindEntityEvents: unbindEntityEvents:                                       |
	 `---------------------------------------------------------------------------' 
	*/
}

var MarionetteItemViewNotes = function() {
	/*
	 .---------------------------------------------------------------------------.
	| Marionette.ItemView                                                         |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain                                                          |
	|    Backbone.View -> Marionette.View -> Marionette.ItemView                  |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|                   | 'before:render', 'render'                               |
	|.---------------------------------------------------------------------------.|
	|  Class Options: NA                                                          |
	|.---------------------------------------------------------------------------.|
	| v.constructor()                                                             |
	| v.serializeData() -> acts on model: calls                                   |
	|     `-> v.serializeModel()                                                  |
	| v.serializeCollection()                                                     |
	| v.render() -> dont-use/override -> override the `Marionette.Renderer`       |
	|                                                 object instead              |
	| v.attachELContent -> override to optimize rendering or render in            |
	|                      nonstandard way. see source for example.               |
	| v.destroy()                                                                 |
	 `---------------------------------------------------------------------------' 
	*/
}

var MarionetteCollectionViewNotes = function(){
	/*
	 .---------------------------------------------------------------------------.
	| Marionette.CollectionView                                                   |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain                                                          |
	|    Backbone.View -> Marionette.View -> Marionette.CollectionView            |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|  'add', 'remove', | 'show', 'before:render', 'render',                      |
	|  'reset', 'sort'  | 'before:render:collection', render:collection,          |
	|  view 'all'       | 'before:render:empty', 'render:empty' 'before:show',    |
	|                   | 'before:remove:child', 'remove:child',                  |
	|                   | 'before:destroy:collection', 'destroy:collection'       |
	|                   | --> proxy evnets to child prefixing w/ 'childview:*'    |
	|.---------------------------------------------------------------------------.|
	|  Class Options: childView, emptyView, emptyViewOptions, childViewOptions    |
	|                 childViewEventProxy                                         |
	|.---------------------------------------------------------------------------.|
	|  Constructor Options: { sort: false }                                       |
	|.---------------------------------------------------------------------------.|
	| v.childViewEventPrefix: 'childview'                                         |
	| v.constructor        -> { sort: false }                                     |
	| v.initRenderBuffer() ->                                                     |
	| v.startBuffering()   ->                                                     |
	| v.endBuffering()     ->                                                     |
	| v._initialEvents()   -> 'add', 'remove', 'reset', 'sort'                    |
	| v.onShowCalled()     -> trigger show on child views.                        |
	| v.render()           -> triggers 'before:render' & 'render'                 |
	| v.resortView()  -> Render view after sorting Override to change after       |
	|                   'sort'. Example: only 'renderChildren' in a ComposetView  |
	| v.showEmptyView()    ->                                                     |
	| v.destroyEmptyView() -> option: emptyView                                   |
	| v.getEmptyView()     ->                                                     |
	| v.addEmptyView()     -> option: emptyViewOptions, childViewOptions          |
	| v.getChildView()     -> option: childView                                   |
	| v.addChildView()     -> option: childViewOptions                            |
	| v.addChild()         ->                                                     |
	| v.renderChildView()  -> insert into DOM                                     |
	| v.buildChildView()   ->                                                     |
	| v.removeChildView()  -> 'before:remove:child', 'remove:child'               |
	| v.isEmpty()                                                                 |
	| v.checkEmpty()                                                              |
	| v.attachBuffer()     -> override IF you have overridden attachHtml          |
	| v.attachHtml()       -> override if you want something other than append    |
	| v.destroy()          -> fires destroy:collection events                     |
	| v.destroyChildren()  ->                                                     |
	| v.proxyChildEvents() ->                                                     |
	 `---------------------------------------------------------------------------'
	*/
}

var MarionetteCompositeViewNotes = function(){
	/*
	 .---------------------------------------------------------------------------. 
	| Marionette.CompositeView                                                    |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain                                                          |
	|    Backbone.View -> Marionette.View -> Marionette.CpllectionView            |
	|                                                `-> Marionette.CompositeView |
	|.---------------------------------------------------------------------------.|
	|  Class Options: childViewContainer                                          |
	|.---------------------------------------------------------------------------.|
	| v.serializeData()         ->                                                |
	| v.getChildViewContainer() ->                                                |
	 `---------------------------------------------------------------------------'
	*/
}

var MarionetteLayoutViewNotes = function(){
	/*
	 .---------------------------------------------------------------------------. 
	|    Marionette.LayoutView                                                    |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain for LayoutView                                           |
	|     Backbone.View -> Marionette.View -> Marionette.ItemView                 |
	|                                                   `-> Marionette.LayoutView |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|                   | 'before:region:add', 'before:region:remove'             |
	|.---------------------------------------------------------------------------.|
	|  Class Options: regionClass                                                 |
	|.---------------------------------------------------------------------------.|
	|  Constructor Options: { regions: menu: '#menu' }                            |
	|.---------------------------------------------------------------------------.|
	| v.constructor                                                               |
	| v.render()     -> 1st time: render using region objects                     |
	|                   2nd call: destroy the views that the regions are showing  |
	|                             reset the `el`                                  |
	|                   Avoid Re-Rendering The Entire LayoutView                  |
	| v.destroy()                                                                 |
	| v.addRegion()                                                               |
	| v.addRegions()                                                              |
	| v.removeRegion()                                                            |
	| v.getRegion()    -> i.e.: getRegion('main')                                 |
	| v.getRegions()                                                              |
	 `---------------------------------------------------------------------------'
	*/
}

var MarionetteAppRouterNotes = function(){
	/*
	 .---------------------------------------------------------------------------. 
	|    Marionette.AppRouter                                                     |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain for AppRouter                                            |
	|     Backbone.Router -> Marionette.AppRouter                                 |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|                   |                                                         |
	|.---------------------------------------------------------------------------.|
	|  Class Options: appRoutes, routes                                           |
	|.---------------------------------------------------------------------------.|
	|  Constructor Options: controller                                            |
	|.---------------------------------------------------------------------------.|
	| v.constructor                                                               |
	| v.appRoute()          ->  Used when adding routs @ runtime methodology      |
	| v.processAppRoutes()  ->  Used when adding routs @ runtime methodology      |
	|                                                                             |
	|                                                                             |
	|                                                                             |
	|                                                                             |
	|                                                                             |
	 `---------------------------------------------------------------------------'
	*/

}
var MarionetteHistoryNotes = function(){
	/*
	 .---------------------------------------------------------------------------. 
	|    Marionette.History                                                       |
	|`---------------------------------------------------------------------------'|
	|    Prototype Chain for History                                              |
	|.---------------------------------------------------------------------------.|
	|    listen events  | trigger events                                          |
	|    -------------  | --------------                                          |
	|                   |                                                         |
	|.---------------------------------------------------------------------------.|
	|  Class Options:                                            |
	|.---------------------------------------------------------------------------.|
	|  Constructor Options:                                             |
	|.---------------------------------------------------------------------------.|
	|                                                                             |
	|                             {pushState: true }                                                |
	|                                                                             |
	|                                                                             |
	|                                                                             |
	 `---------------------------------------------------------------------------'
	*/

}

var Misc = function() {
	/*
	Backbone.View._ensureViewIsIntact()   ->----- MY BUG !!!! -----
	Backbone.View.onDestroy()....!!!!!!

	Two things I can do to fix this
	1: 'you can specify an 'onDestroy()' method in your view to add custome code
	    that is called after the view is destroyed.
	2: Make sure the layout is not getting re-rendered.


	sync(method, model, [options])
	method - CRUD 'create', 'read', 'update', 'delete'
	model - the model
	options - success & error callbacks, and other jQuery request options

	Begin: 'request' event is emitted 
	   `-> 'sync'    event on success
	   `-> 'error'   event on failure

	You can override the sync method globally or on a model.
	create -> POST   /collection
	read -> GET   /collection[/id]
	update -> PUT   /collection/id
	patch -> PATCH   /collection/id
	delete -> DELETE   /collection/id

	Backbone.emulateHTTP = true
	PUT, PATCH, DELETE -> POST w/ _method=PUT in http header 'X-HTTP-Method-Override'

	Backbone.emulateJSON = true; MOME type 'application/x-www-form-urlencoded'

	*/

}
