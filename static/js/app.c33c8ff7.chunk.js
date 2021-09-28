(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@react-navigation/native/lib/module/NavigationContainer.js
var NavigationContainer = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/@react-navigation/native-stack/lib/module/navigators/createNativeStackNavigator.js + 19 modules
var createNativeStackNavigator = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/styles/DefaultTheme.js
var DefaultTheme = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/core/Provider.js + 2 modules
var Provider = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
var es = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/integration/react.js
var integration_react = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 11 modules
var redux_persist_es = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(155);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage);

// CONCATENATED MODULE: ./store/storage.web.js
/* harmony default export */ var storage_web = (storage_default.a);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(101);

// CONCATENATED MODULE: ./store/actionTypes.js
var TASKS_FETCH_REQUESTED='TASKS_FETCH_REQUESTED';var TASKS_FETCH_SUCCEEDED='TASKS_FETCH_SUCCEEDED';var TASKS_FETCH_FAILED='TASKS_FETCH_FAILED';var TASK_ADDED='TASK_ADDED';var TASK_EDITED='TASK_EDITED';var TASK_REMOVED='TASK_REMOVED';var CATEGORIES_FETCH_REQUESTED='CATEGORIES_FETCH_REQUESTED';var CATEGORIES_FETCH_SUCCEEDED='CATEGORIES_FETCH_SUCCEEDED';var CATEGORIES_FETCH_FAILED='CATEGORIES_FETCH_FAILED';
// CONCATENATED MODULE: ./store/reducers/categories.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var initialState={loaded:false,loading:false,data:[]};function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case CATEGORIES_FETCH_REQUESTED:return _objectSpread(_objectSpread({},state),{},{loading:true});case CATEGORIES_FETCH_SUCCEEDED:return _objectSpread(_objectSpread({},Object(lodash["omit"])(state,['error'])),{},{data:action.payload,loaded:true,loading:false});case CATEGORIES_FETCH_FAILED:return _objectSpread(_objectSpread({},state),{},{error:true,loaded:true,loading:false});default:return state;}}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(20);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./store/reducers/tasks.js
function tasks_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function tasks_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){tasks_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{tasks_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var tasks_initialState={loaded:false,loading:false,data:[],timestamp:Math.floor(Date.now())};function tasks_reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:tasks_initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case TASKS_FETCH_REQUESTED:return tasks_objectSpread(tasks_objectSpread({},state),{},{loading:true});case TASKS_FETCH_SUCCEEDED:return tasks_objectSpread(tasks_objectSpread({},Object(lodash["omit"])(state,['error'])),{},{data:action.payload,loaded:true,loading:false});case TASKS_FETCH_FAILED:return tasks_objectSpread(tasks_objectSpread({},state),{},{error:true,loaded:true,loading:false});case TASK_ADDED:return tasks_objectSpread(tasks_objectSpread({},state),{},{data:[action.payload].concat(toConsumableArray_default()(state.data)),timestamp:Math.floor(Date.now())});case TASK_EDITED:return tasks_objectSpread(tasks_objectSpread({},state),{},{data:state.data.map(function(data){if(data.id===action.payload.id){return action.payload;}return data;}),timestamp:Math.floor(Date.now())});case TASK_REMOVED:return tasks_objectSpread(tasks_objectSpread({},state),{},{data:state.data.filter(function(d){return d.id!==action.payload;}),timestamp:Math.floor(Date.now())});default:return state;}}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(122);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./store/api.js
var api_fetchCategories=function fetchCategories(){var request;return regenerator_default.a.async(function fetchCategories$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regenerator_default.a.awrap(axios_default.a.get('https://api.fake.rest/3a448a57-49ed-4fe0-82b4-16052ef87316/categories'));case 2:request=_context.sent;return _context.abrupt("return",request);case 4:case"end":return _context.stop();}}},null,null,null,Promise);};var api_fetchTasks=function fetchTasks(){var request;return regenerator_default.a.async(function fetchTasks$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regenerator_default.a.awrap(axios_default.a.get('https://api.fake.rest/3a448a57-49ed-4fe0-82b4-16052ef87316/tasks'));case 2:request=_context2.sent;return _context2.abrupt("return",request);case 4:case"end":return _context2.stop();}}},null,null,null,Promise);};/* harmony default export */ var api = ({fetchCategories:api_fetchCategories,fetchTasks:api_fetchTasks});
// CONCATENATED MODULE: ./store/sagas.js
var _marked=regenerator_default.a.mark(sagas_fetchCategories),_marked2=regenerator_default.a.mark(fetchCategoriesSaga),_marked3=regenerator_default.a.mark(sagas_fetchTasks),_marked4=regenerator_default.a.mark(fetchTasksSaga),_marked5=regenerator_default.a.mark(mySaga);function sagas_fetchCategories(){var categories,payload;return regenerator_default.a.wrap(function fetchCategories$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(api.fetchCategories);case 3:categories=_context.sent;if(!(categories.status!==200)){_context.next=6;break;}throw Error();case 6:_context.next=8;return categories.data;case 8:payload=_context.sent;_context.next=11;return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])({type:CATEGORIES_FETCH_SUCCEEDED,payload:payload.data});case 11:_context.next=17;break;case 13:_context.prev=13;_context.t0=_context["catch"](0);_context.next=17;return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])({type:CATEGORIES_FETCH_FAILED,message:_context.t0.message});case 17:case"end":return _context.stop();}}},_marked,null,[[0,13]]);}function fetchCategoriesSaga(){return regenerator_default.a.wrap(function fetchCategoriesSaga$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(redux_saga_effects_npm_proxy_esm["d" /* takeEvery */])(CATEGORIES_FETCH_REQUESTED,sagas_fetchCategories);case 2:case"end":return _context2.stop();}}},_marked2);}function sagas_fetchTasks(){var tasks,payload;return regenerator_default.a.wrap(function fetchTasks$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(api.fetchTasks);case 3:tasks=_context3.sent;if(!(tasks.status!==200)){_context3.next=6;break;}throw Error();case 6:_context3.next=8;return tasks.data;case 8:payload=_context3.sent;_context3.next=11;return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])({type:TASKS_FETCH_SUCCEEDED,payload:payload.data});case 11:_context3.next=17;break;case 13:_context3.prev=13;_context3.t0=_context3["catch"](0);_context3.next=17;return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])({type:TASKS_FETCH_FAILED,message:_context3.t0.message});case 17:case"end":return _context3.stop();}}},_marked3,null,[[0,13]]);}function fetchTasksSaga(){return regenerator_default.a.wrap(function fetchTasksSaga$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return Object(redux_saga_effects_npm_proxy_esm["d" /* takeEvery */])(TASKS_FETCH_REQUESTED,sagas_fetchTasks);case 2:case"end":return _context4.stop();}}},_marked4);}function mySaga(){return regenerator_default.a.wrap(function mySaga$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])([fetchCategoriesSaga(),fetchTasksSaga()]);case 2:case"end":return _context5.stop();}}},_marked5);}
// CONCATENATED MODULE: ./store/index.js
var sagaMiddleware=Object(redux_saga_core_npm_proxy_esm["a" /* default */])();var appReducer=Object(redux["c" /* combineReducers */])({categories:reducer,tasks:tasks_reducer});var rootReducer=function rootReducer(state,action){return appReducer(state,action);};var middleware=[sagaMiddleware];var composeEnhancers=typeof window==='object'&&false&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):redux["d" /* compose */];var enhancer=composeEnhancers(redux["a" /* applyMiddleware */].apply(void 0,middleware));var persistConfig={key:'root',storage:storage_web,version:1};var persistedReducer=Object(redux_persist_es["a" /* persistReducer */])(persistConfig,rootReducer);var store=Object(redux["e" /* createStore */])(persistedReducer,enhancer);var persistor=Object(redux_persist_es["b" /* persistStore */])(store);sagaMiddleware.run(mySaga);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(23);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@react-navigation/native/lib/module/useLinkTo.js
var useLinkTo = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Appbar/index.js + 7 modules
var Appbar = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/ActivityIndicator.js
var ActivityIndicator = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/index.js + 7 modules
var lib_module = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Divider.js
var Divider = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(18);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Searchbar.js
var Searchbar = __webpack_require__(141);

// CONCATENATED MODULE: ./components/FilterList.js
var FilterList_FilterList=function FilterList(_ref){var close=_ref.close,searchQuery=_ref.searchQuery,setSearchQuery=_ref.setSearchQuery;var onChangeSearch=function onChangeSearch(query){return setSearchQuery(query);};return react_default.a.createElement(Searchbar["a" /* default */],{placeholder:"Search",onChangeText:onChangeSearch,value:searchQuery,onSubmitEditing:close,onIconPress:close});};FilterList_FilterList.propTypes={close:prop_types_default.a.func.isRequired,searchQuery:prop_types_default.a.string.isRequired,setSearchQuery:prop_types_default.a.func.isRequired};/* harmony default export */ var components_FilterList = (FilterList_FilterList);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(25);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(29);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(14);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(26);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(27);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js + 7 modules
var react_beautiful_dnd_esm = __webpack_require__(116);

// CONCATENATED MODULE: ./components/Draggable.js
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function Draggable_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Draggable_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Draggable_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Draggable_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var getItems=function getItems(count){return Array.from({length:count},function(v,k){return k;}).map(function(k){return{id:"item-"+k,content:"item "+k};});};var Draggable_reorder=function reorder(list,startIndex,endIndex){var result=Array.from(list);var _result$splice=result.splice(startIndex,1),_result$splice2=slicedToArray_default()(_result$splice,1),removed=_result$splice2[0];result.splice(endIndex,0,removed);return result;};var grid=8;var getItemStyle=function getItemStyle(isDragging,draggableStyle,index,isDone){return Draggable_objectSpread({userSelect:"none",padding:grid*2,marginTop:index===0?15:0,marginBottom:20,marginLeft:20,marginRight:20,boxShadow:"0px 1px 5px "+(isDragging?'black':'#c7c7c7'),backgroundColor:isDone?'green':'white',color:isDone?'white':'black',borderRadius:10,position:'relative',textAlign:'center'},draggableStyle);};var getListStyle=function getListStyle(isDraggingOver){return{background:'white',padding:grid,width:'100%',flex:1};};var Draggable_DraggableList=function(_Component){inherits_default()(DraggableList,_Component);var _super=_createSuper(DraggableList);function DraggableList(props){var _this;classCallCheck_default()(this,DraggableList);_this=_super.call(this,props);_this.state={items:(props==null?void 0:props.items)||[]};_this.onDragEnd=_this.onDragEnd.bind(assertThisInitialized_default()(_this));return _this;}createClass_default()(DraggableList,[{key:"onDragEnd",value:function onDragEnd(result){if(!result.destination){return;}var items=Draggable_reorder(this.state.items,result.source.index,result.destination.index);this.setState({items:items});}},{key:"render",value:function render(){var _this2=this;var _onClick=this.props.onClick;return react_default.a.createElement(react_beautiful_dnd_esm["a" /* DragDropContext */],{onDragEnd:this.onDragEnd},react_default.a.createElement("div",{style:{overflow:'scroll'}},react_default.a.createElement(react_beautiful_dnd_esm["c" /* Droppable */],{droppableId:"droppable"},function(provided,snapshot){return react_default.a.createElement(View["a" /* default */],extends_default()({},provided.droppableProps,{ref:provided.innerRef,style:getListStyle(snapshot.isDraggingOver)}),_this2.state.items.map(function(item,index){return react_default.a.createElement(react_beautiful_dnd_esm["b" /* Draggable */],{key:item.id,draggableId:item.id,index:index},function(provided,snapshot){return react_default.a.createElement("div",extends_default()({ref:provided.innerRef},provided.draggableProps,provided.dragHandleProps,{style:getItemStyle(snapshot.isDragging,provided.draggableProps.style,index,item.isDone),onClick:function onClick(){return _onClick(item.id);}}),item.name,item.isDone&&react_default.a.createElement("div",{style:{position:'absolute',height:1,backgroundColor:'white',top:25,left:20,right:20}}));});}),provided.placeholder);})));}}]);return DraggableList;}(react["Component"]);Draggable_DraggableList.propTypes={items:prop_types_default.a.arrayOf(prop_types_default.a.shape({id:prop_types_default.a.string.isRequired,name:prop_types_default.a.string.isRequired})).isRequired,onClick:prop_types_default.a.func.isRequired};/* harmony default export */ var Draggable = (Draggable_DraggableList);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/ScrollView/index.js + 3 modules
var ScrollView = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/core/theming.js
var theming = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Menu/Menu.js
var Menu = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/TouchableRipple/TouchableRipple.js
var TouchableRipple = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/TextInput/TextInput.js + 11 modules
var TextInput = __webpack_require__(149);

// CONCATENATED MODULE: ./components/DropDown.js
var DropDown=Object(react["forwardRef"])(function(props,ref){var activeTheme=Object(theming["b" /* useTheme */])();var visible=props.visible,onDismiss=props.onDismiss,showDropDown=props.showDropDown,value=props.value,setValue=props.setValue,activeColor=props.activeColor,mode=props.mode,label=props.label,placeholder=props.placeholder,inputProps=props.inputProps,list=props.list,dropDownContainerMaxHeight=props.dropDownContainerMaxHeight,theme=props.theme,disabled=props.disabled;var _useState=Object(react["useState"])(value),_useState2=slicedToArray_default()(_useState,2),displayValue=_useState2[0],setDisplayValue=_useState2[1];var _useState3=Object(react["useState"])({height:0,width:0,x:0,y:0}),_useState4=slicedToArray_default()(_useState3,2),inputLayout=_useState4[0],setInputLayout=_useState4[1];var onLayout=function onLayout(event){setInputLayout(event.nativeEvent.layout);};Object(react["useEffect"])(function(){var _list$find;var _label=(_list$find=list.find(function(_){return _.value===value;}))==null?void 0:_list$find.label;if(_label){setDisplayValue(_label);}},[list,value]);return react_default.a.createElement(Menu["a" /* default */],{visible:visible,onDismiss:onDismiss,theme:theme,anchor:react_default.a.createElement(TouchableRipple["a" /* default */],{ref:ref,onPress:showDropDown,onLayout:onLayout,disabled:disabled},react_default.a.createElement(View["a" /* default */],{pointerEvents:"none"},react_default.a.createElement(TextInput["a" /* default */],extends_default()({value:displayValue,mode:mode,label:label,placeholder:placeholder,pointerEvents:"none",theme:theme},inputProps)))),style:{maxWidth:inputLayout==null?void 0:inputLayout.width,width:inputLayout==null?void 0:inputLayout.width,marginTop:inputLayout==null?void 0:inputLayout.height}},react_default.a.createElement(ScrollView["a" /* default */],{style:{maxHeight:dropDownContainerMaxHeight||200}},list.map(function(_item,_index){return react_default.a.createElement(lib_module["a" /* List */].Item,{key:_item.value,title:_item.custom||_item.label,titleStyle:{color:value===_item.value?activeColor||(theme||activeTheme).colors.primary:undefined},description:_item.description,onPress:function onPress(){setValue(_item.value);if(onDismiss){onDismiss();}},style:{width:inputLayout==null?void 0:inputLayout.width}});})));});DropDown.propTypes={disabled:prop_types_default.a.bool,list:prop_types_default.a.arrayOf(prop_types_default.a.any)};DropDown.defaultProps={disabled:false,list:[]};/* harmony default export */ var components_DropDown = (DropDown);
// CONCATENATED MODULE: ./screens/Home.js
function Home(){var _useSelector=Object(es["d" /* useSelector */])(function(state){return{categories:state.categories,tasks:state.tasks};}),categories=_useSelector.categories,tasks=_useSelector.tasks;var linkTo=Object(useLinkTo["a" /* default */])();var _React$useState=react_default.a.useState(false),_React$useState2=slicedToArray_default()(_React$useState,2),showDropDownStatus=_React$useState2[0],setShowDropDownStatus=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=slicedToArray_default()(_React$useState3,2),showDropDownCategory=_React$useState4[0],setShowDropDownCategory=_React$useState4[1];var _React$useState5=react_default.a.useState(''),_React$useState6=slicedToArray_default()(_React$useState5,2),category=_React$useState6[0],setCategory=_React$useState6[1];var _React$useState7=react_default.a.useState(''),_React$useState8=slicedToArray_default()(_React$useState7,2),status=_React$useState8[0],setStatus=_React$useState8[1];var _React$useState9=react_default.a.useState(''),_React$useState10=slicedToArray_default()(_React$useState9,2),searchQuery=_React$useState10[0],setSearchQuery=_React$useState10[1];var _getList=function _getList(){var items=tasks.data;if(searchQuery!==''){items=items.filter(function(item){return item.name.toUpperCase().indexOf(searchQuery.toUpperCase())>-1;});}if(status!==''){if(status==='done'){items=items.filter(function(item){return item.isDone;});}else{items=items.filter(function(item){return!item.isDone;});}}if(category!==''){items=items.filter(function(item){return item.category===category;});}return items;};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Appbar["a" /* default */].Header,{dark:true},react_default.a.createElement(Appbar["a" /* default */].Content,{title:"To Do"}),react_default.a.createElement(Appbar["a" /* default */].Action,{icon:"plus",onPress:function onPress(){return linkTo('/form');}})),tasks.loading||categories.loading?react_default.a.createElement(View["a" /* default */],{style:{height:Platform["a" /* default */].OS==='web'?'100vh':'100%',justifyContent:'center',alignItems:'center'}},react_default.a.createElement(ActivityIndicator["a" /* default */],{size:"large"})):react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(lib_module["a" /* List */].Accordion,{title:"Filter",style:{backgroundColor:'#FFF'},left:function left(props){return react_default.a.createElement(lib_module["a" /* List */].Icon,extends_default()({},props,{icon:"filter"}));}},react_default.a.createElement(View["a" /* default */],{style:{width:'100%',marginLeft:-36}},react_default.a.createElement(components_FilterList,{searchQuery:searchQuery,setSearchQuery:setSearchQuery})),react_default.a.createElement(View["a" /* default */],{style:{width:'100%',marginLeft:-36,marginTop:10}},react_default.a.createElement(components_DropDown,{label:"Status",searchable:false,mode:"outlined",value:status,setValue:setStatus,list:[{value:'',label:'All'},{value:'done',label:'Done'},{value:'todo',label:'To Do'}],visible:showDropDownStatus,showDropDown:function showDropDown(){return setShowDropDownStatus(true);},onDismiss:function onDismiss(){return setShowDropDownStatus(false);}})),react_default.a.createElement(View["a" /* default */],{style:{width:'100%',marginLeft:-36,marginTop:10,marginBottom:20}},react_default.a.createElement(components_DropDown,{label:"Category",searchable:false,mode:"outlined",value:category,setValue:setCategory,list:[{value:'',label:'All'}].concat(toConsumableArray_default()(categories.data.map(function(c){return{value:c.id,label:c.label};}))),visible:showDropDownCategory,showDropDown:function showDropDown(){return setShowDropDownCategory(true);},onDismiss:function onDismiss(){return setShowDropDownCategory(false);}}))),react_default.a.createElement(Divider["a" /* default */],null),react_default.a.createElement(Draggable,{items:_getList(),onClick:function onClick(itemId){return linkTo("/form/"+itemId);},key:searchQuery+"-"+status+"-"+category+"-"+tasks.timestamp})));}/* harmony default export */ var screens_Home = (Home);
// EXTERNAL MODULE: ./node_modules/@react-navigation/core/lib/module/index.js + 57 modules
var core_lib_module = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Typography/Text.js
var Text = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Button.js
var Button = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Switch.js + 1 modules
var Switch = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Portal/Portal.js + 1 modules
var Portal = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Dialog/Dialog.js + 4 modules
var Dialog = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/react-native-paper/lib/module/components/Typography/Paragraph.js
var Paragraph = __webpack_require__(148);

// CONCATENATED MODULE: ./screens/Form.js
function Form(){var _route$params6,_route$params7,_route$params8,_route$params9;var navigation=Object(core_lib_module["l" /* useNavigation */])();var linkTo=Object(useLinkTo["a" /* default */])();var dispatch=Object(es["c" /* useDispatch */])();var route=Object(core_lib_module["n" /* useRoute */])();var goBack=function goBack(){return navigation.canGoBack()?navigation.goBack():navigation.push('/');};var _useSelector=Object(es["d" /* useSelector */])(function(state){return{tasks:state.tasks,categories:state.categories};}),categories=_useSelector.categories,tasks=_useSelector.tasks;var _React$useState=react_default.a.useState(false),_React$useState2=slicedToArray_default()(_React$useState,2),notFound=_React$useState2[0],setNotFound=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=slicedToArray_default()(_React$useState3,2),mounted=_React$useState4[0],setMounted=_React$useState4[1];var _React$useState5=react_default.a.useState(''),_React$useState6=slicedToArray_default()(_React$useState5,2),name=_React$useState6[0],setName=_React$useState6[1];var _React$useState7=react_default.a.useState(''),_React$useState8=slicedToArray_default()(_React$useState7,2),description=_React$useState8[0],setDescription=_React$useState8[1];var _React$useState9=react_default.a.useState(''),_React$useState10=slicedToArray_default()(_React$useState9,2),category=_React$useState10[0],setCategory=_React$useState10[1];var _React$useState11=react_default.a.useState(false),_React$useState12=slicedToArray_default()(_React$useState11,2),isDone=_React$useState12[0],setIsDone=_React$useState12[1];var _React$useState13=react_default.a.useState(false),_React$useState14=slicedToArray_default()(_React$useState13,2),showDropDownCategory=_React$useState14[0],setShowDropDownCategory=_React$useState14[1];var _React$useState15=react_default.a.useState(false),_React$useState16=slicedToArray_default()(_React$useState15,2),visible=_React$useState16[0],setVisible=_React$useState16[1];var onToggleSwitch=function onToggleSwitch(){return setIsDone(!isDone);};var showDialog=function showDialog(){return setVisible(true);};var hideDialog=function hideDialog(){return setVisible(false);};var onDelete=function onDelete(){var _route$params;dispatch({type:TASK_REMOVED,payload:route==null?void 0:(_route$params=route.params)==null?void 0:_route$params.id});navigation.navigate('/');};var onSubmit=function onSubmit(){if(name===''||description===''||category===''){alert('Please fill all the fields');}else{var _route$params2;if(route!=null&&(_route$params2=route.params)!=null&&_route$params2.id){var _route$params3;dispatch({type:TASK_EDITED,payload:{id:route==null?void 0:(_route$params3=route.params)==null?void 0:_route$params3.id,name:name,description:description,category:category,isDone:isDone}});navigation.navigate('/');}else{dispatch({type:TASK_ADDED,payload:{id:"item-"+(tasks.data.length+1),name:name,description:description,category:category,isDone:isDone}});navigation.navigate('/');}}};react_default.a.useEffect(function(){var _route$params4;setNotFound(false);setMounted(false);if(route!=null&&(_route$params4=route.params)!=null&&_route$params4.id&&tasks.loaded){var task=tasks.data.find(function(t){var _route$params5;return t.id===(route==null?void 0:(_route$params5=route.params)==null?void 0:_route$params5.id);});if(task){setName(task==null?void 0:task.name);setDescription(task==null?void 0:task.description);setCategory(task==null?void 0:task.category);setIsDone(task==null?void 0:task.isDone);setNotFound(false);}else{setName('');setDescription('');setCategory('');setIsDone(false);setNotFound(true);}setMounted(true);}setMounted(true);},[route==null?void 0:(_route$params6=route.params)==null?void 0:_route$params6.id,tasks]);if(!mounted){return react_default.a.createElement(View["a" /* default */],{style:{height:Platform["a" /* default */].OS==='web'?'100vh':'100%',justifyContent:'center',alignItems:'center'}},react_default.a.createElement(ActivityIndicator["a" /* default */],{size:"large"}));}if(notFound){return react_default.a.createElement(View["a" /* default */],{style:{height:Platform["a" /* default */].OS==='web'?'100vh':'100%',justifyContent:'center',alignItems:'center'}},react_default.a.createElement(Text["a" /* default */],{style:{fontSize:20,fontWeight:'bold',marginBottom:20}},"Task not found"),react_default.a.createElement(Button["a" /* default */],{onPress:function onPress(){return navigation.navigate('/');},mode:"contained",color:"tomato",dark:true},"Go to Home screen"));}return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Appbar["a" /* default */].Header,{dark:true},react_default.a.createElement(Appbar["a" /* default */].BackAction,{onPress:goBack}),react_default.a.createElement(Appbar["a" /* default */].Content,{title:route!=null&&(_route$params7=route.params)!=null&&_route$params7.id?'Edit':'Add New'}),(route==null?void 0:(_route$params8=route.params)==null?void 0:_route$params8.id)&&react_default.a.createElement(Appbar["a" /* default */].Action,{icon:"delete",onPress:showDialog}),react_default.a.createElement(Appbar["a" /* default */].Action,{icon:"check",onPress:onSubmit})),react_default.a.createElement(View["a" /* default */],{style:{padding:20}},react_default.a.createElement(TextInput["a" /* default */],{label:"Name",value:name,onChangeText:function onChangeText(_value){return setName(_value);}}),react_default.a.createElement(View["a" /* default */],{style:{padding:10}}),react_default.a.createElement(TextInput["a" /* default */],{label:"Description",value:description,onChangeText:function onChangeText(_value){return setDescription(_value);},multiline:true,numberOfLines:6}),react_default.a.createElement(View["a" /* default */],{style:{padding:10}}),react_default.a.createElement(components_DropDown,{key:category,label:"Category",searchable:false,mode:"outlined",value:category,setValue:setCategory,list:categories.data.map(function(c){return{value:c.id,label:c.label};}),visible:showDropDownCategory,showDropDown:function showDropDown(){return setShowDropDownCategory(true);},onDismiss:function onDismiss(){return setShowDropDownCategory(false);}}),react_default.a.createElement(View["a" /* default */],{style:{padding:10}}),(route==null?void 0:(_route$params9=route.params)==null?void 0:_route$params9.id)&&react_default.a.createElement(View["a" /* default */],{style:{flexDirection:'row',justifyContent:'flex-end'}},react_default.a.createElement(Text["a" /* default */],{style:{marginRight:20}},"Mark as Done"),react_default.a.createElement(Switch["a" /* default */],{value:isDone,onValueChange:onToggleSwitch,color:"tomato"}))),react_default.a.createElement(Portal["a" /* default */],null,react_default.a.createElement(Dialog["a" /* default */],{visible:visible,onDismiss:hideDialog},react_default.a.createElement(Dialog["a" /* default */].Title,null,"Delete confirmation"),react_default.a.createElement(Dialog["a" /* default */].Content,null,react_default.a.createElement(Paragraph["a" /* default */],null,"Are you sure?")),react_default.a.createElement(Dialog["a" /* default */].Actions,null,react_default.a.createElement(Button["a" /* default */],{onPress:hideDialog,color:"gray"},"No"),react_default.a.createElement(Button["a" /* default */],{onPress:onDelete},"Yes")))));}/* harmony default export */ var screens_Form = (Form);
// CONCATENATED MODULE: ./App.js
function App_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function App_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){App_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{App_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Stack=Object(createNativeStackNavigator["a" /* default */])();var config={screens:{'/':'/','/form/:id?':'form/:id?'}};var linking={prefixes:[],config:config};var App_theme=App_objectSpread(App_objectSpread({},DefaultTheme["a" /* default */]),{},{colors:App_objectSpread(App_objectSpread({},DefaultTheme["a" /* default */].colors),{},{primary:'tomato',accent:'yellow'})});function Entry(){var dispatch=Object(es["c" /* useDispatch */])();react_default.a.useEffect(function(){dispatch({type:TASKS_FETCH_REQUESTED});dispatch({type:CATEGORIES_FETCH_REQUESTED});},[]);return react_default.a.createElement(NavigationContainer["a" /* default */],{linking:linking,styl:true},react_default.a.createElement(Stack.Navigator,{screenOptions:{headerTitle:'My App',contentStyle:{overflow:'hidden',backgroundColor:'#FFF',boxShadow:'0px 1px 5px #000'}}},react_default.a.createElement(Stack.Screen,{name:"/",path:"/",component:screens_Home,options:{headerShown:false}}),react_default.a.createElement(Stack.Screen,{name:"/form/:id?",path:"form/:id?",component:screens_Form,options:{headerShown:false}})));}function App(){return react_default.a.createElement(es["a" /* Provider */],{store:store},react_default.a.createElement(integration_react["a" /* PersistGate */],{loading:null,persistor:persistor},react_default.a.createElement(Provider["a" /* default */],{theme:App_theme,dark:true},react_default.a.createElement(Entry,null))));}/* harmony default export */ var App_0 = __webpack_exports__["a"] = (App);

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(280);


/***/ })

},[[212,1,2]]]);
//# sourceMappingURL=app.c33c8ff7.chunk.js.map