<script lang="ts">
    import moment from "moment-timezone";
    import { onMount } from "svelte";

    const myLocation = "Australia/Melbourne";

    type StreamScheduleDay = {
        start: moment.Moment;
        end: moment.Moment;
    };

    const myStreamSchedule: null | StreamScheduleDay[] = [
        {
            start: getUpcomingTimeDevTZ(4, "11:00"),
            end: getUpcomingTimeDevTZ(4, "16:00"),
        },
        {
            start: getUpcomingTimeDevTZ(5, "11:00"),
            end: getUpcomingTimeDevTZ(5, "16:00"),
        },
    ];

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

    let sameTimezone = $state(true);
    let adjusted = $state(true);

    let localisedStreamSchedule = [];

    let formattedSchedule: Schedule[] = $state([]);
    let formattedLocalisedSchedule: Schedule[] = $state([]);

    function displayStreamSchedule() {
        if (myStreamSchedule == null) {
            return;
        }
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
        class="z-20 flex
        w-full
        rounded-xl
        bg-[#141414] px-1 py-1"
    >
        <button
            onclick={() => (adjusted = true)}
            class="w-1/2 rounded-lg py-1
        transition-colors duration-150
        {adjusted ? 'bg-[#303030] text-white' : 'text-gray-400'}"
            >Your Timezone</button
        >
        <button
            onclick={() => (adjusted = false)}
            class="flex-grow rounded-lg py-1
        transition-colors duration-150
        {adjusted ? 'text-gray-400' : 'bg-[#303030] text-white'}"
            >AEST/<wbr />AEDT</button
        >
    </div>
{/if}
<div class="mt-1">
    {#if myStreamSchedule.length}
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
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
                            <td class="px-1 md:px-5"
                                >{devTime.start} - {devTime.end}</td
                            >
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    {:else}
        <div>
            To be announced on <a
                href="/discord"
                target="_blank"
                class="underline hover:text-blue-500">Discord</a
            >
        </div>
    {/if}
</div>

<style>
    tr {
        text-align: center;
    }
</style>
