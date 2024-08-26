<script lang="ts">
    import moment from "moment-timezone";
    import { onMount } from "svelte";

    const myStreamSchedule = [
        {
            start: getUpcomingTimeDevTZ(3, "10:00"),
            end: getUpcomingTimeDevTZ(3, "14:00"),
        },
        {
            start: getUpcomingTimeDevTZ(4, "10:00"),
            end: getUpcomingTimeDevTZ(4, "16:30"),
        },
        {
            start: getUpcomingTimeDevTZ(5, "10:00"),
            end: getUpcomingTimeDevTZ(5, "19:00"),
        },
    ];

    const myLocation = "Australia/Melbourne";

    /**
     * Calculates the upcoming specified time for a given day of the week in my timezone.
     *
     * This function initially finds the upcoming Friday at 8 AM in my timezone.
     * It then adjusts this time based on the provided `dayOfWeek` and `time24` parameters to find the
     * upcoming time specified by these parameters. If the specified time has already passed for the current week,
     * it calculates the time for the next week.
     *
     * @param dayOfWeek - The day of the week as an integer (1 for Monday, 7 for Sunday).
     * @param time24 - The time in 24-hour format (e.g., "14:00" for 2 PM).
     * @returns A moment object representing the upcoming specified time in my timezone.
     */
    function getUpcomingTimeDevTZ(
        dayOfWeek: number,
        time24: string,
    ): moment.Moment {
        // Current time in my timezone
        let now = moment.tz(myLocation);

        let inputTime = moment(time24, "HH:mm");
        let upcomingTime = now
            .clone()
            .day(dayOfWeek)
            .hour(inputTime.hour())
            .minute(inputTime.minute())
            .second(0);

        if (now.isAfter(upcomingTime)) {
            upcomingTime.add(1, "week"); // If the time has already passed this week, set to next week
        }

        return upcomingTime.tz(myLocation);
    }

    /**
     * Convert a given time in my timezone to the user's local timezone.
     * @param {moment.Moment} devTimeZone - Moment object representing the time in my timezone.
     * @returns A moment object representing the equivalent time in the user's local timezone.
     */
    function convertToUserLocalTimezone(
        devTimeZone: moment.Moment,
    ): moment.Moment {
        return devTimeZone.clone().tz(moment.tz.guess());
    }

    type Schedule = {
        day: string;
        start: string;
        end: string;
    };

    let sameTimezone = true;
    let adjusted = true;

    let localisedStreamSchedule = [];

    let formattedSchedule: Schedule[] = [];
    let formattedLocalisedSchedule: Schedule[] = [];

    function displayStreamSchedule() {
        localisedStreamSchedule = myStreamSchedule.map((stream) => ({
            start: convertToUserLocalTimezone(stream.start),
            end: convertToUserLocalTimezone(stream.end),
        }));

        formattedSchedule = myStreamSchedule.map((stream) => ({
            day: stream.start.format("dddd"),
            start: stream.start.format("h:mm a"),
            end: stream.end.format("h:mm a"),
        }));

        formattedLocalisedSchedule = localisedStreamSchedule.map((stream) => ({
            day: stream.start.format("dddd"),
            start: stream.start.format("h:mm a"),
            end: stream.end.format("h:mm a"),
        }));
    }

    onMount(() => {
        // Example usage
        displayStreamSchedule();

        if (
            formattedLocalisedSchedule[0].day === formattedSchedule[0].day &&
            formattedLocalisedSchedule[0].start === formattedSchedule[0].start
        ) {
            sameTimezone = true;
        } else {
            sameTimezone = false;
        }
    });
</script>

<!-- TABS -->
{#if !sameTimezone}
    <div
        class="w-full flex
        bg-[#141414]
        rounded-xl
        px-1 py-1 z-20"
    >
        <button
            on:click={() => (adjusted = true)}
            class="rounded-lg w-1/2 py-1
        transition-colors duration-150
        {adjusted ? 'text-white bg-[#303030]' : 'text-gray-400'}"
            >Your Timezone</button
        >
        <button
            on:click={() => (adjusted = false)}
            class="rounded-lg flex-grow py-1
        transition-colors duration-150
        {adjusted ? 'text-gray-400' : 'text-white bg-[#303030]'}"
            >AEST/<wbr />AEDT</button
        >
    </div>
{/if}
<div class="mt-1">
    <table>
        <tr>
            <th>Day</th>
            <th>Time</th>
        </tr>
        {#if adjusted}
            {#each formattedLocalisedSchedule as localTime}
                <tr>
                    <td class="px-1 md:px-5">{localTime.day}</td>
                    <td class="px-1 md:px-5"
                        >{localTime.start} - {localTime.end}</td
                    >
                </tr>
            {/each}
        {:else}
            {#each formattedSchedule as devTime}
                <tr>
                    <td class="px-1 md:px-5">{devTime.day}</td>
                    <td class="px-1 md:px-5">{devTime.start} - {devTime.end}</td
                    >
                </tr>
            {/each}
        {/if}
    </table>
</div>

<style>
    tr {
        text-align: center;
    }
</style>
