<template>
	<div class="time-picker">
		<a-time-picker
			v-model:value="timeValue"
			:minute-step="30"
			placeholder="Select time"
			value-format="HH:mm:ss"
			:show-second="false"
			format="HH:mm"
			@change="handleTimeChange"
			:allowClear="false"
		/>
	</div>
</template>

<script>
import {TimePicker} from 'ant-design-vue';
import dayjs from 'dayjs';
import {ref} from 'vue';

export default {
	components: {
		ATimePicker: TimePicker,
	},
	props: {
		content: {type: Object, required: true},
		uid: {type: String, required: true},
		wwEditorState: {type: Object, required: true},
	},
	emits: ['trigger-event'],
	methods: {
		handleTimeChange(time) {
			this.$emit('trigger-event', {
				name: 'onTimeChange',
				event: {time},
			});
		},
	},

	setup(props) {
		// Инициализируем реактивную переменную timeValue
		const timeValue = ref(
			props.content?.time ? dayjs(props.content.time, 'HH:mm') : null
		);

		return {
			timeValue,
		};
	},
};
</script>

<style>
.ant-picker {
	background-color: #f4f3ef !important; /* Черный фон */
	border-color: #173f35 !important; /* Основной цвет границы */
	color: #173f35 !important; /* Белый текст */
}

.ant-picker-input input {
	color: #173f35 !important; /* Цвет текста внутри инпута */
	font-weight: 500 !important;
}

.ant-picker-panel-container {
	background-color: #f4f3ef !important; /* Фон панели */
}

.ant-picker-time-panel-cell-inner {
	color: #173f35 !important; /* Цвет цифр времени */
}

.ant-picker-time-panel-cell-inner:hover {
	background-color: #f4f3ef !important; /* Цвет фона при наведении */
	color: #173f35 !important; /* Цвет текста при наведении */
}

:where(.css-1p3hq3p).ant-picker .ant-picker-suffix {
	color: #173f35 !important; /* Цвет текста иконки часов */
}

:where(.css-1p3hq3p).ant-btn-primary {
	background-color: #173f35 !important;
	box-shadow: none !important;
	color: #f4f3ef !important;
}

:where(.css-1p3hq3p) a {
	color: #173f35 !important;
}

:where(.css-1p3hq3p).ant-picker-dropdown
	.ant-picker-time-panel-column
	> li.ant-picker-time-panel-cell-selected
	.ant-picker-time-panel-cell-inner {
	background: #173f35 !important;
	color: #f4f3ef !important;
}

:where(.css-1p3hq3p).ant-picker .ant-picker-clear {
	color: #173f35 !important;
}
</style>
