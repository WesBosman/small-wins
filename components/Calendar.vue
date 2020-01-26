<template>
    <div class="calendar">
        <h1 class="calendar-header">
            <b-button variant="outline-primary" type="button" v-on:click="previousWeek">{{"<"}}</b-button>
            {{ month + " " + year}}
            <b-button variant="outline-primary" type="button" v-on:click="nextWeek">{{">"}}</b-button>
        </h1>
        <div class="calendar-view">
            <div class="calendar-weekday" v-for="(day, index) in dayAbbreviations" :key="index">
                <div class="calendar-banner"></div>
                <div class="calendar-day-banner"></div>
                <span class="calendar-day" v-bind:class="isToday(numberedDaysOfWeek[index])">
                    {{ numberedDaysOfWeek[index] }}
                </span>
                <div class="calendar-weekday-header">
                    {{ day }}
                </div>
                <div class="calendar-weekday-content">

                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    computed: {
        /**
         * Need to check less than one and greater than end of the month values
         */
        numberedDaysOfWeek: function(){
            let startDay = this.dayNumber - this.dayOfWeek;

            return Array.from(Array(7).keys()).map(x => {
                // Handle underflow to previous month
                if(startDay + x < 1){
                    return startDay + x + this.lastDayOfPreviousMonth;
                }
                // Handle overflow to next month
                else if(startDay + x > this.lastDayOfMonth){
                    return x + startDay - this.lastDayOfMonth;
                }

                return x + startDay
            });
        },
        month: function(){
            return this.startDate.toLocaleString('default', { month: 'long' });
        },
        dayNumber: function(){
            return this.startDate.getDate();
        },
        dayString: function(){
            return this.daysOfTheWeek[new Date().getDay()];
        },
        dayOfWeek: function() {
            return this.startDate.getDay();
        },
        dayAbbreviations: function(){
            return this.daysOfTheWeek.map(day => day.slice(0, 3).toUpperCase());
        },
        lastDayOfMonth: function(){
            let year = this.startDate.getFullYear();
            let month = this.startDate.getMonth() + 1;
            let day = 0;

            return new Date(year, month, day).getDate();
        },
        lastDayOfPreviousMonth: function(){
            let year = this.startDate.getFullYear();
            let month = this.startDate.getMonth();
            let day = 0;

            return new Date(year, month, day).getDate();
        },
        year: function(){
            return this.startDate.getFullYear();
        }
    },
    data() {
        return {
            startDate: new Date(),
            daysOfTheWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        };
    },
    methods: {
        previousWeek: function(){
            console.log("Clicked previous week");
            let year    = this.startDate.getFullYear();
            let month   = this.startDate.getMonth();
            let day     = this.startDate.getDate() - (7- this.startDate.getDay());

            this.startDate = new Date(year, month, day);
        },
        nextWeek: function(){
            console.log("Clicked next week");
            let year    = this.startDate.getFullYear();
            let month   = this.startDate.getMonth();
            let day     = this.startDate.getDate() + (7 - this.startDate.getDay());

            this.startDate = new Date(year, month, day);
        },
        isToday: function(day){
            let now = new Date().getDate();

            return day === now ? "today" : "";
        }
    }
}
</script>
<style>
.calendar-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: gray;
}
.calendar-view {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.calendar-banner {
  height: 0px;
  position: absolute;
  margin-left: 5px;
  width: 40px;
  border-left: 25px solid #007bff;
  border-right: 25px solid #007bff;
  border-top: 60px solid #007bff;
  border-bottom: 20px solid transparent;
}
.calendar-day-banner {
  height: 0px;
  position: absolute;
  margin-left: 10px;
  width: 30px;
  border-left: 20px solid white;
  border-right: 20px solid white;
  border-top: 52px solid white;
  border-bottom: 17px solid transparent;
}
.calendar-day {
  position: absolute;
  margin-top: 10px;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  color: white;
  text-align: center;
  padding-top: 3px;
  border-radius: 50%;
  background-color: #007bff;
}
.calendar-day.today {
  background-color: #ff6a00;
}
.calendar-weekday {
  border: 3px solid #007bff;
  height: 250px;
}
.calendar-weekday-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px dashed gray;
}
</style>