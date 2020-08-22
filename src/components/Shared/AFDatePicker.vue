<template>
	<div @click="toggleModal">
		<div>{{dateTime.length > 0 ? generateFormattedDate(dateTime) : 'Add date/time'}}</div>
		<button v-if="dateTime.length > 0">Delete</button>
	</div>
	<AFModal @close="closeModal()" v-if="modalActive">
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
			<div
				@click="setDate(day)"
				:class="`col day ${isCurrentDate(day) ? 'today': ''}`"
				v-for="(day, j) in week"
				:key="j"
			>{{day}}</div>
		</div>
		<div class="row">
			<input placeholder="Set time" />
		</div>
		<div class="row right">
			<div class="container">
				<button @click="closeModal()" class="btn">Cancel</button>
				<button @click="save()" class="btn">OK</button>
			</div>
		</div>
	</AFModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AFModal from "./AFModal.vue";
import useAFDate from "@/store/AFDate";

export default defineComponent({
	name: "AFDatePicker",
	components: {
		AFModal,
	},
	emits: ["update:dateTime", "update:repetition"],
	props: {
		dateTime: {
			type: String,
			required: true,
		},
    },
    created() {
        this.calculateDays();
        console.log(this.weeks)
    },
	setup(props, { emit }) {
		const {
			DAYS_IN_MONTHS,
			MONTH_LABELS,
			DAY_LABELS,
			generateFormattedDate,
		} = useAFDate();

		const modalActive = ref(false);
		

		const weeks = ref<Array<Array<number | string>>>([[]]);
		const date = ref(new Date());
		const dateContext = ref(new Date());
		const selectedDateTime = ref<Array<string>>(["", ""]);

		// International date standard = YYYY-MM-DDTHH:MM
		if (props.dateTime.length > 0) {
			selectedDateTime.value = props.dateTime.split("T");
			dateContext.value = new Date(selectedDateTime.value[0]);
		}

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
					if ((i == 0 && j < firstDay) || currentDay > days) {
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

		function isCurrentDate(day: number | string) {
			return (
				dateContext.value.getMonth() == date.value.getMonth() &&
				date.value.getDate() == day
			);
		}

		function generateSplicedDate() {
			return selectedDateTime.value[0] + "T" + selectedDateTime.value[1];
		}

		function closeModal() {
			modalActive.value = false;
		}

		function save() {
			emit("update:dateTime", generateSplicedDate());
			closeModal();
		}

		function setDate(day: number | string) {
			if (typeof day == "string") {
				try {
					day = parseInt(day);
					if (isNaN(day)) return;
				} catch (e) {
					console.error("Something went wrong setting date");
					return;
				}
			}

            const currDate = dateContext.value;
            const year = currDate.getFullYear();
            const month = ('0' + ((currDate.getMonth() + 1)).toString()).slice(-2);
            day = ('0' + ((day).toString())).slice(-2);
			selectedDateTime.value[0] = `${year}-${
				month
			}-${day}`;
        }

        const toggleModal = () => {
            calculateDays();
			modalActive.value = !modalActive.value;
		};

		return {
			modalActive,
			toggleModal,
			weeks,
			date,
			calculateDays,
			incrementMonth,
			getMonth,
			dateContext,
			isCurrentDate,
			setDate,
			selectedDateTime,
			generateSplicedDate,
			closeModal,
			save,
			generateFormattedDate,
		};
	},
});
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	justify-content: space-between;
	min-height: 2em;

	&.right {
		justify-content: flex-end;
	}
}
.col {
	min-width: 2em;
	height: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	&.day {
		text-align: center;
		border-radius: 100%;

		&.today {
			background: blue;
			color: white;
		}
	}
}
</style>