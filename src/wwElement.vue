<template>
	<div class="time-picker" :style="dynamicStyles">
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
import {ref, watch, computed} from 'vue';

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

		const dynamicStyles = computed(() => {
			return {
				'--picker-text-color': props.content?.textColor || '#173f35',
			};
		});

		watch(
			() => props.content.time,
			newTime => {
				timeValue.value = newTime ? dayjs(newTime, 'HH:mm') : null;
			}
		);

		return {
			timeValue,
			dynamicStyles,
		};
	},
};
</script>

<style>
.ant-picker {
	background-color: #f4f3ef !important;
	border-color: var(--picker-text-color) !important;
	color: var(--picker-text-color) !important;
}

.ant-picker-input input {
	color: var(--picker-text-color) !important; /* Цвет текста внутри инпута */
	font-weight: 500 !important;
}

.ant-picker-panel-container {
	background-color: #f4f3ef !important; /* Фон панели */
}

.ant-picker-time-panel-cell-inner {
	color: var(--picker-text-color) !important; /* Цвет цифр времени */
}

.ant-picker-time-panel-cell-inner:hover {
	background-color: #f4f3ef !important; /* Цвет фона при наведении */
	color: var(--picker-text-color) !important; /* Цвет текста при наведении */
}

:where(.css-1p3hq3p).ant-picker .ant-picker-suffix {
	color: var(--picker-text-color) !important; /* Цвет текста иконки часов */
}

:where(.css-1p3hq3p).ant-btn-primary {
	background-color: #f4f3ef !important;
	box-shadow: none !important;
	color: #f4f3ef !important;
}

:where(.css-1p3hq3p) a {
	color: var(--picker-text-color) !important;
}

:where(.css-1p3hq3p).ant-picker-dropdown
	.ant-picker-time-panel-column
	> li.ant-picker-time-panel-cell-selected
	.ant-picker-time-panel-cell-inner {
	background-color: #f4f3ef !important;
	color: #f4f3ef !important;
}

:where(.css-1p3hq3p).ant-picker .ant-picker-clear {
	color: var(--picker-text-color) !important;
}
</style>
