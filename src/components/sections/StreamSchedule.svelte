<script lang="ts">
    import moment from "moment-timezone";
    import { onMount } from "svelte";

    let adjusted = true;

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

        // Find the upcoming Friday
        let upcomingFriday = now.clone().day(5).hour(8).minute(0).second(0);
        if (now.day() >= 5 && now.format("HH:mm") >= "08:00") {
            // If today is Friday and it's already past 8am, set to next Friday
            upcomingFriday.add(1, "week");
        }

        // Adjust based on the provided day and time
        let dayDiff = (5 - dayOfWeek + 7) % 7; // Calculate days until Friday
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

    let myStreamSchedule = [];
    let localisedStreamSchedule = [];

    let formattedSchedule: Schedule[] = [];
    let formattedLocalisedSchedule: Schedule[] = [];

    function displayStreamSchedule() {
        myStreamSchedule = [
            {
                start: getUpcomingTimeDevTZ(5, "10:00"),
                end: getUpcomingTimeDevTZ(5, "18:00"),
            },
            {
                start: getUpcomingTimeDevTZ(6, "10:00"),
                end: getUpcomingTimeDevTZ(6, "18:00"),
            },
        ];

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
    });
</script>

<!-- TABS -->
<div
    class="w-full flex
        bg-[#141414]
        rounded-xl
        px-1 py-1 z-20"
>
    <button
        on:click={() => (adjusted = true)}
        class="rounded-lg w-1/2 py-2
        transition-colors duration-150
        {adjusted ? 'text-white bg-[#303030]' : 'text-gray-400'}"
        >Your Timezone</button
    >
    <button
        on:click={() => (adjusted = false)}
        class="rounded-lg flex-grow py-2
        transition-colors duration-150
        {adjusted ? 'text-gray-400' : 'text-white bg-[#303030]'}">AEDT</button
    >
</div>
<div class="mt-2">
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
