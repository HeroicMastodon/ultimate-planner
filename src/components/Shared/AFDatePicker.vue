<template>
	<button @click="toggleModal">Add date/time</button>
	<AFModal v-if="modalActive">
		<template v-slot:header>
			<div class="row">
				<button @click="incrementMonth(-1)">Left</button>
				{{getMonth()}} {{dateContext.getFullYear()}}
				<button @click="incrementMonth(1)">Right</button>
			</div>
		</template>
		<div class="row">
			<div class="col">S</div>
			<div class="col">M</div>
			<div class="col">T</div>
			<div class="col">W</div>
			<div class="col">T</div>
			<div class="col">F</div>
			<div class="col">S</div>
		</div>
		<div class="row"></div>
        <div class="row" v-for="(week, i) in weeks" :key="i">
            <div class="col" v-for="(day, j) in week" :key="j">
                {{day}}
            </div>
        </div>
        <div class="row">
            <input placeholder="Set time"/>
        </div>
	</AFModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AFModal from "./AFModal.vue";

export default defineComponent({
	name: "AFDatePicker",
	components: {
		AFModal,
	},
	setup() {
        const DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const MONTH_LABELS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		const modalActive = ref(false);
		const toggleModal = () => {
			modalActive.value = !modalActive.value;
		};
		const weeks = ref<Array<Array<number | string>>>([[]]);
		const date = ref(new Date());
		const dateContext = ref(new Date());

		function firstWeekdayInMonth() {
			return new Date(
				dateContext.value.getFullYear(),
				dateContext.value.getMonth(),
				1
			).getDay();
        }
        
		function calculateDays() {
			const month = dateContext.value.getMonth();
			let days = DAYS_IN_MONTHS[month];

			const isLeapYear =
				(dateContext.value.getFullYear() % 4 == 0 &&
					dateContext.value.getFullYear() % 100 != 0) ||
				dateContext.value.getFullYear() % 400 == 0;
			if (month == 1 && isLeapYear) days++;

			const firstDay = firstWeekdayInMonth();

			weeks.value = [];

            let currentDay = 1;
			for (let i = 0; i < 7; i++) {
                weeks.value.push([]);
				for (let j = 0; j < 7; j++) {
					if ((i == 0 && j < firstDay) || (currentDay > days)) {
						weeks.value[i].push("");
						continue;
                    }
                    
                    weeks.value[i].push(currentDay);
                    currentDay++;
                }
                
			}
        }
        
        function incrementMonth(inc = 1) {
            dateContext.value.setMonth(dateContext.value.getMonth() + inc);
            calculateDays();
        }

        function getMonth() {
            return MONTH_LABELS[dateContext.value.getMonth()];
        }

        calculateDays();
		return { modalActive, toggleModal, weeks, date, calculateDays, incrementMonth, getMonth, dateContext };
	},
});
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	justify-content: space-between;
	min-height: 1em;
}
.col {
	min-width: 1em;
}
</style>