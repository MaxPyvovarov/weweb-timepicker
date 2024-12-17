<template>
	<div class="time-picker">
		<a-config-provider
			:theme="{
				token: {
					colorPrimary: '#00b96b',
				},
			}"
		>
			<a-time-picker
				v-model:value="timeValue"
				:minute-step="30"
				:second-step="10"
				placeholder="Select time"
				format="HH:mm"
			/>
		</a-config-provider>
	</div>
</template>

<script>
import {ref} from 'vue';
import {TimePicker} from 'ant-design-vue';

const timeValue = ref(); // Хранит выбранное время

export default {
	components: {
		ATimePicker: TimePicker,
	},
	props: {
		content: {type: Object, required: true},
	},
	computed: {
		textStyle() {
			return {
				color: this.content.textColor,
			};
		},
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
