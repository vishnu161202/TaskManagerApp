# Answers to Technical Questions

## How long did you spend on the coding test?
I spent approximately **[your time spent]** hours on the coding test, including planning, implementation, and testing.

## What was the most useful feature that was added to the latest version of your chosen language?
One of the most useful features added to JavaScript (ES2020) is the **optional chaining (`?.`)** operator. It allows accessing deeply nested object properties without checking for null or undefined values at each level, reducing redundant checks and improving code readability.

### Example Usage:
```javascript
const user = {
    profile: {
        name: "Vishnu",
        contact: {
            email: "vishnu@example.com"
        }
    }
};

// Without optional chaining:
const email = user && user.profile && user.profile.contact && user.profile.contact.email;
console.log(email); // "vishnu@example.com"

// With optional chaining:
const emailNew = user?.profile?.contact?.email;
console.log(emailNew); // "vishnu@example.com"
```
This feature significantly improves the readability and safety of accessing nested objects.

## How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would follow these steps:

1. **Monitor Application Metrics**: Use tools like Google Lighthouse, Chrome DevTools, or performance monitoring tools (New Relic, Datadog) to track performance bottlenecks.
2. **Analyze Logs**: Review application logs for errors, slow response times, or memory leaks.
3. **Profile Code Execution**: Use browser performance profilers or Node.js performance hooks to identify slow-running functions.
4. **Check Database Queries**: If applicable, optimize database queries using indexes, caching, or query profiling tools.
5. **Reduce Render Blocking**: Optimize assets (CSS, JavaScript) and minimize blocking operations.
6. **Optimize API Calls**: Reduce unnecessary network requests and implement caching mechanisms.

Yes, I have tracked and resolved performance issues before, particularly in optimizing API response times and improving frontend rendering efficiency.

## If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would consider adding the following features and improvements:

- **Persistent Storage**: Implement local storage or backend integration to retain tasks across sessions.
- **Task Prioritization**: Allow users to assign priorities to tasks (e.g., high, medium, low).
- **Task Categories**: Introduce categories or labels for better task organization.
- **Due Dates and Notifications**: Add due dates and reminder notifications for tasks.
- **Drag-and-Drop Support**: Enhance the UI by enabling drag-and-drop functionality to reorder tasks.
- **Dark Mode**: Provide a theme toggle between light and dark modes.
- **Multi-User Support**: Implement authentication and multi-user task management with real-time updates.

These features would enhance usability and make the application more robust for everyday task management.

