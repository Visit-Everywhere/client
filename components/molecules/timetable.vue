<template>
    <div class="timetable">
        <h1 class="timetable__title">Schedule</h1>
        <div class="timetable__equipments">
            <div class="timetable__equipments__days">
                <div class="timetable__equipments__days__monday">
                    <p class="name_days">Monday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div>
                <div class="timetable__equipments__days__tuesday">
                    <p class="name_days">Tuesday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div >
                <div class="timetable__equipments__days__wednesday">
                    <p class="name_days">Wednesday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div>
                <div class="timetable__equipments__days__thursday">
                    <p class="name_days">Thursday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div >
                <div class="timetable__equipments__days__friday">
                    <p class="name_days">Friday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div>
                <div class="timetable__equipments__days__saturday">
                    <p class="name_days">Saturday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div>
                <div class="timetable__equipments__days__sunday">
                    <p>Sunday:</p>
                    <p class="timetable__equipments__time">{{time}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: String,
    default: "10:00-20:00",
  },
});

</script>

<style lang="scss" scoped>
.timetable{
    display: flexbox;
    padding: 8px 25px 42px 25px;
    max-width: 306px;
    height: 253px;
    background: #131620;
    border-radius: 16px;
    outline: none;

    &__title{
    max-width: 102.81px;
    height: 28.48px;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #D4D4D5;
    }

    &__equipments{
        font-weight: 400;
        margin-top: 11px;

        &__days{
            
            margin-top: 11px;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            color: #FFFFFF;

            &__monday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;

            }
            &__tuesday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;
                }
            &__wednesday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;
                }
            &__thursday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;
                }
            &__friday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;

                }
            &__saturday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;

                }
            &__sunday{
                margin-top: 11px;
                max-width: 306px;
                display: flex;
                justify-content: space-between;
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;

                }
        }
        &__time{

            width: 117px;
            height: 20px;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #1AC836;
            }
    }
.name_days{
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    max-width: 80.59px;
    height: 18px;
    color: #FFFFFF;
}

}


</style>

