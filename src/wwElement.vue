<template>
	<div class="time-picker">
		<a-config-provider
			:theme="{
				token: {
					colorPrimary: 'red',
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
		<p>Выбранное время: {{ timeValue }}</p>
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
