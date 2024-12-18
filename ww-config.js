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
			type: 'text',
			defaultValue: '05:00',
			bindable: true,
		},
	},
	externals: {
		'ant-design-vue': 'AntDesignVue',
		dayjs: 'dayjs',
	},
};
