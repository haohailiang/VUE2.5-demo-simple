// 挂载点
// 模板[可以卸载JS代码的template中, 也可以写在html内容中]
// 实例

// 全局组件
Vue.component('todo-item', {
	props    : ['item', 'index'],
	template : '<li>值:{{ item }}&nbsp;&nbsp;&nbsp;序号:{{index}}</li>'
});

var app = new Vue({
	el: '#root',
	data: {
		msg             : 'Hello World!',
		number          : 123,
		h4Font          : '<strong>strongFont</strong>',
		title           : 'this is dynamic property bind',
		oneWayContent   : '单向数据绑定',
		twoWayContent   : '手工双向数据绑定',
		computedProp1   : '',
		computedProp2   : '',
		computedCount   : 0,
		conditionSwitch : true,
		loopItems       : ['星期天', '星期一', '星期二'],
		todoInputValue  : '',
		todoLists       : []
	},
	methods: {
		handleClick: function(){
			alert('U has clicked me !');
		},
		handleCondition: function(){
			this.conditionSwitch = !this.conditionSwitch;
		},
		handleSubmit: function(){
			this.todoLists.push(this.todoInputValue);
			this.todoInputValue = '';
		}
	},
	watch: {
        // 笨笨的方式
		// computedProp1: function(){
		// 	this.computedCount ++;
		// },
		// computedProp2: function(){
		// 	this.computedCount ++;
		// }
        // 一步到位的方法
		computedPropName: function(){
			this.computedCount ++;
		}
	},
	computed: {
		computedPropName: function(){
			return this.computedProp1 + ' ' + this.computedProp2;
		}
	}
})
