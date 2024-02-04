
import { generateGreetingPage } from "./generateGreeting";
import greetingOptions from "./greeting-options.json";

// https://stackoverflow.com/questions/58491003/how-to-get-the-current-date-in-a-cloudflares-worker
export const GreetingPage = async (context) => {
    var current = new Date();
    return context.html(generateGreetingPage(greetingOptions, current));
}