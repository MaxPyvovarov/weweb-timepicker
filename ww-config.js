export default {
	editor: {
		label: {
			en: 'Custom Time Picker',
		},
	},
	properties: {
		time: {
			label: {
				en: 'Time',
			},
			type: 'Text',
			defaultValue: '',
			bindable: true,
		},
		textColor: {
			label: {
				en: 'Text color',
			},
			type: 'Color',
			defaultValue: '#173f35',
			bindable: true,
		},
	},
	externals: {
		'ant-design-vue': 'AntDesignVue',
		dayjs: 'dayjs',
	},
	triggerEvents: [
		{
			name: 'onTimeChange',
			label: {en: 'On time change'},
			event: {
				time: '',
			},
		},
	],
};
