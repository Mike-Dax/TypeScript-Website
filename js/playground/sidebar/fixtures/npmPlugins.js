define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.allNPMPlugins = void 0;
    exports.allNPMPlugins = [
        {
            name: "@Structured Types/plugin",
            id: "@structured-types/playground-plugin",
            description: "Extract structured types and documentation from the your source code.",
            author: "atanasster",
            href: "https://github.com/ccontrols/structured-types",
        },
        {
            name: "Dt Review",
            id: "playground-dt-review",
            description: "Makes reviewing DefinitelyTyped PRs easier",
            author: "orta",
            href: "https://github.com/orta/playground-dt-review",
        },
        {
            name: "Code Show Flow",
            id: "playground-code-show-flow",
            description: "Visualize TypeScript's code inference flow nodes",
            author: "orta",
            href: "https://github.com/orta/playground-code-show-flow",
        },
        {
            name: "Ts Scanner",
            id: "playground-ts-scanner",
            description: "See the results of the TypeScript Scanner on some code",
            author: "orta",
            href: "https://github.com/orta/playground-ts-scanner",
        },
        {
            name: "Live Transformer",
            id: "playground-live-transformer",
            description: "A plugin to create a TypeScript transformer live in the playground",
            author: "kevram",
            href: "https://github.com/kevinramharak/playground-live-transformer",
        },
        {
            name: "TypeScript Json Schema",
            id: "playground-typescript-json-schema",
            description: "Convert the exported types/interfaces in the Playground to JSON Schemas",
            author: "orta",
            href: "https://github.com/orta/playground-typescript-json-schema",
        },
        {
            name: "Codeblock Examples",
            id: "playground-plugin-codeblock-examples",
            description: "Use markdown codeblocks to demo many code samples in the playground",
            author: "orta",
            href: "https://github.com/orta/playground-plugin-codeblock-examples",
        },
        {
            name: "Ts Transform Runtime Check",
            id: "playground-ts-transform-runtime-check",
            description: "A playground plugin for ts-transform-runtime-check",
            author: "kevram",
            href: "https://github.com/kevinramharak/playground-ts-transform-runtime-check",
        },
        {
            name: "Collaborate",
            id: "playground-collaborate",
            description: "A simple way to live-code in the Playground with others.",
            author: "orta",
            href: "https://github.com/orta/playground-collaborate",
        },
        {
            name: "Ts Symbols",
            id: "playground-ts-symbols",
            description: "Shows the compiler symbols which are created by your playground code",
            author: "orta",
            href: "https://github.com/orta/playground-ts-symbols",
        },
        {
            name: "Browser Fs",
            id: "playground-browser-fs",
            description: "Playground plugin to enable other plugins to use BrowserFS as filesystem",
            author: "kevram",
            href: "https://github.com/kevinramharak/playground-browser-fs",
        },
        {
            name: "Prettier",
            id: "ts-playground-plugin-prettier",
            description: "A simple button to make valid playground code Prettier!",
            author: "xavdid",
            href: "https://github.com/xavdid/ts-playground-plugin-prettier",
        },
        {
            name: "@Type Challenges/plugin",
            id: "@type-challenges/playground-plugin",
            description: "Playground integration for Type Challenges",
            author: "antfu",
            href: "https://github.com/type-challenges/playground-type-challenges-plugin",
        },
        {
            name: "Planning Day",
            id: "planning-day",
            description: "TypeScript Playground plugin for planning an agile sprint or iteration by combining static type verification of configuration with a React Gantt chart visualization.",
            author: "jsuder",
            href: "https://github.com/JSuder-xx/planning-day",
        },
        {
            name: "Dts Plugin",
            id: "playground-dts-plugin",
            description: "Generate d.ts from JS",
            author: "sanders_n",
            href: "https://github.com/sandersn/playground-dts-plugin",
        },
        {
            name: "Vim",
            id: "ts-playground-plugin-vim",
            description: "Provides Vim keybindings for TypeScript Playground editor.",
            author: "quramy",
            href: "https://www.npmjs.com/package/ts-playground-plugin-vim",
        },
        {
            name: "Link Shortener",
            id: "typescript-playground-link-shortener",
            description: "Create short-links for your current playground code and compiler settings",
            author: "gillchristian",
            href: "https://github.com/gillchristian/tsplay.dev",
        },
        {
            name: "Transformer Timeline",
            id: "playground-transformer-timeline",
            description: "Lets you see each stage of the transform process for a TypeScript JS + DTS emit as a timeline.",
            author: "orta",
            href: "https://github.com/orta/playground-transformer-timeline",
        },
        {
            name: "Clippy",
            id: "playground-clippy",
            description: "Finally, someone who has an answer for every problem in your Playground",
            author: "orta",
            href: "https://github.com/orta/playground-clippy",
        },
        {
            name: "Presentation Mode",
            id: "typescript-playground-presentation-mode",
            description: "Present your TypeScript talk directly in the playground, powered by GitHub gists!",
            author: "orta",
            href: "https://github.com/orta/playground-slides",
        },
        {
            name: "GitHub Explorer",
            id: "ts-playground-plugin-github-explorer",
            description: "Explore a GitHub repo on TypeScript playground",
            author: "emnudge",
            href: "https://www.npmjs.com/package/ts-playground-plugin-github-explorer",
        },
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtUGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvZml4dHVyZXMvbnBtUGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQWEsUUFBQSxhQUFhLEdBQUc7UUFDM0I7WUFDRSxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLEVBQUUsRUFBRSxxQ0FBcUM7WUFDekMsV0FBVyxFQUNULHVFQUF1RTtZQUN6RSxNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsK0NBQStDO1NBQ3REO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixFQUFFLEVBQUUsc0JBQXNCO1lBQzFCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsOENBQThDO1NBQ3JEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLEVBQUUsRUFBRSwyQkFBMkI7WUFDL0IsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxtREFBbUQ7U0FDMUQ7UUFDRDtZQUNFLElBQUksRUFBRSxZQUFZO1lBQ2xCLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsV0FBVyxFQUFFLHdEQUF3RDtZQUNyRSxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSwrQ0FBK0M7U0FDdEQ7UUFDRDtZQUNFLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsRUFBRSxFQUFFLDZCQUE2QjtZQUNqQyxXQUFXLEVBQ1Qsb0VBQW9FO1lBQ3RFLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSw4REFBOEQ7U0FDckU7UUFDRDtZQUNFLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsRUFBRSxFQUFFLG1DQUFtQztZQUN2QyxXQUFXLEVBQ1QseUVBQXlFO1lBQzNFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLDJEQUEy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akIsSUFBSSxFQUFFLG9FQUFvRTtTQUMzRTtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWxsTlBNUGx1Z2lucyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQFN0cnVjdHVyZWQgVHlwZXMvcGx1Z2luXCIsXG4gICAgaWQ6IFwiQHN0cnVjdHVyZWQtdHlwZXMvcGxheWdyb3VuZC1wbHVnaW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXh0cmFjdCBzdHJ1Y3R1cmVkIHR5cGVzIGFuZCBkb2N1bWVudGF0aW9uIGZyb20gdGhlIHlvdXIgc291cmNlIGNvZGUuXCIsXG4gICAgYXV0aG9yOiBcImF0YW5hc3N0ZXJcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jY29udHJvbHMvc3RydWN0dXJlZC10eXBlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEdCBSZXZpZXdcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLWR0LXJldmlld1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1ha2VzIHJldmlld2luZyBEZWZpbml0ZWx5VHlwZWQgUFJzIGVhc2llclwiLFxuICAgIGF1dGhvcjogXCJvcnRhXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLWR0LXJldmlld1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb2RlIFNob3cgRmxvd1wiLFxuICAgIGlkOiBcInBsYXlncm91bmQtY29kZS1zaG93LWZsb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgVHlwZVNjcmlwdCdzIGNvZGUgaW5mZXJlbmNlIGZsb3cgbm9kZXNcIixcbiAgICBhdXRob3I6IFwib3J0YVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL29ydGEvcGxheWdyb3VuZC1jb2RlLXNob3ctZmxvd1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUcyBTY2FubmVyXCIsXG4gICAgaWQ6IFwicGxheWdyb3VuZC10cy1zY2FubmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VlIHRoZSByZXN1bHRzIG9mIHRoZSBUeXBlU2NyaXB0IFNjYW5uZXIgb24gc29tZSBjb2RlXCIsXG4gICAgYXV0aG9yOiBcIm9ydGFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9vcnRhL3BsYXlncm91bmQtdHMtc2Nhbm5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaXZlIFRyYW5zZm9ybWVyXCIsXG4gICAgaWQ6IFwicGxheWdyb3VuZC1saXZlLXRyYW5zZm9ybWVyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgcGx1Z2luIHRvIGNyZWF0ZSBhIFR5cGVTY3JpcHQgdHJhbnNmb3JtZXIgbGl2ZSBpbiB0aGUgcGxheWdyb3VuZFwiLFxuICAgIGF1dGhvcjogXCJrZXZyYW1cIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rZXZpbnJhbWhhcmFrL3BsYXlncm91bmQtbGl2ZS10cmFuc2Zvcm1lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUeXBlU2NyaXB0IEpzb24gU2NoZW1hXCIsXG4gICAgaWQ6IFwicGxheWdyb3VuZC10eXBlc2NyaXB0LWpzb24tc2NoZW1hXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNvbnZlcnQgdGhlIGV4cG9ydGVkIHR5cGVzL2ludGVyZmFjZXMgaW4gdGhlIFBsYXlncm91bmQgdG8gSlNPTiBTY2hlbWFzXCIsXG4gICAgYXV0aG9yOiBcIm9ydGFcIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9vcnRhL3BsYXlncm91bmQtdHlwZXNjcmlwdC1qc29uLXNjaGVtYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb2RlYmxvY2sgRXhhbXBsZXNcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLXBsdWdpbi1jb2RlYmxvY2stZXhhbXBsZXNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVXNlIG1hcmtkb3duIGNvZGVibG9ja3MgdG8gZGVtbyBtYW55IGNvZGUgc2FtcGxlcyBpbiB0aGUgcGxheWdyb3VuZFwiLFxuICAgIGF1dGhvcjogXCJvcnRhXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLXBsdWdpbi1jb2RlYmxvY2stZXhhbXBsZXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHMgVHJhbnNmb3JtIFJ1bnRpbWUgQ2hlY2tcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLXRzLXRyYW5zZm9ybS1ydW50aW1lLWNoZWNrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBwbGF5Z3JvdW5kIHBsdWdpbiBmb3IgdHMtdHJhbnNmb3JtLXJ1bnRpbWUtY2hlY2tcIixcbiAgICBhdXRob3I6IFwia2V2cmFtXCIsXG4gICAgaHJlZjpcbiAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2tldmlucmFtaGFyYWsvcGxheWdyb3VuZC10cy10cmFuc2Zvcm0tcnVudGltZS1jaGVja1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb2xsYWJvcmF0ZVwiLFxuICAgIGlkOiBcInBsYXlncm91bmQtY29sbGFib3JhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSB3YXkgdG8gbGl2ZS1jb2RlIGluIHRoZSBQbGF5Z3JvdW5kIHdpdGggb3RoZXJzLlwiLFxuICAgIGF1dGhvcjogXCJvcnRhXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLWNvbGxhYm9yYXRlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRzIFN5bWJvbHNcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLXRzLXN5bWJvbHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2hvd3MgdGhlIGNvbXBpbGVyIHN5bWJvbHMgd2hpY2ggYXJlIGNyZWF0ZWQgYnkgeW91ciBwbGF5Z3JvdW5kIGNvZGVcIixcbiAgICBhdXRob3I6IFwib3J0YVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL29ydGEvcGxheWdyb3VuZC10cy1zeW1ib2xzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJyb3dzZXIgRnNcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLWJyb3dzZXItZnNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGxheWdyb3VuZCBwbHVnaW4gdG8gZW5hYmxlIG90aGVyIHBsdWdpbnMgdG8gdXNlIEJyb3dzZXJGUyBhcyBmaWxlc3lzdGVtXCIsXG4gICAgYXV0aG9yOiBcImtldnJhbVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2tldmlucmFtaGFyYWsvcGxheWdyb3VuZC1icm93c2VyLWZzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByZXR0aWVyXCIsXG4gICAgaWQ6IFwidHMtcGxheWdyb3VuZC1wbHVnaW4tcHJldHRpZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBidXR0b24gdG8gbWFrZSB2YWxpZCBwbGF5Z3JvdW5kIGNvZGUgUHJldHRpZXIhXCIsXG4gICAgYXV0aG9yOiBcInhhdmRpZFwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3hhdmRpZC90cy1wbGF5Z3JvdW5kLXBsdWdpbi1wcmV0dGllclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJAVHlwZSBDaGFsbGVuZ2VzL3BsdWdpblwiLFxuICAgIGlkOiBcIkB0eXBlLWNoYWxsZW5nZXMvcGxheWdyb3VuZC1wbHVnaW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJQbGF5Z3JvdW5kIGludGVncmF0aW9uIGZvciBUeXBlIENoYWxsZW5nZXNcIixcbiAgICBhdXRob3I6IFwiYW50ZnVcIixcbiAgICBocmVmOlxuICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vdHlwZS1jaGFsbGVuZ2VzL3BsYXlncm91bmQtdHlwZS1jaGFsbGVuZ2VzLXBsdWdpblwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQbGFubmluZyBEYXlcIixcbiAgICBpZDogXCJwbGFubmluZy1kYXlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVHlwZVNjcmlwdCBQbGF5Z3JvdW5kIHBsdWdpbiBmb3IgcGxhbm5pbmcgYW4gYWdpbGUgc3ByaW50IG9yIGl0ZXJhdGlvbiBieSBjb21iaW5pbmcgc3RhdGljIHR5cGUgdmVyaWZpY2F0aW9uIG9mIGNvbmZpZ3VyYXRpb24gd2l0aCBhIFJlYWN0IEdhbnR0IGNoYXJ0IHZpc3VhbGl6YXRpb24uXCIsXG4gICAgYXV0aG9yOiBcImpzdWRlclwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0pTdWRlci14eC9wbGFubmluZy1kYXlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRHRzIFBsdWdpblwiLFxuICAgIGlkOiBcInBsYXlncm91bmQtZHRzLXBsdWdpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlIGQudHMgZnJvbSBKU1wiLFxuICAgIGF1dGhvcjogXCJzYW5kZXJzX25cIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYW5kZXJzbi9wbGF5Z3JvdW5kLWR0cy1wbHVnaW5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmltXCIsXG4gICAgaWQ6IFwidHMtcGxheWdyb3VuZC1wbHVnaW4tdmltXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZXMgVmltIGtleWJpbmRpbmdzIGZvciBUeXBlU2NyaXB0IFBsYXlncm91bmQgZWRpdG9yLlwiLFxuICAgIGF1dGhvcjogXCJxdXJhbXlcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3RzLXBsYXlncm91bmQtcGx1Z2luLXZpbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaW5rIFNob3J0ZW5lclwiLFxuICAgIGlkOiBcInR5cGVzY3JpcHQtcGxheWdyb3VuZC1saW5rLXNob3J0ZW5lclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDcmVhdGUgc2hvcnQtbGlua3MgZm9yIHlvdXIgY3VycmVudCBwbGF5Z3JvdW5kIGNvZGUgYW5kIGNvbXBpbGVyIHNldHRpbmdzXCIsXG4gICAgYXV0aG9yOiBcImdpbGxjaHJpc3RpYW5cIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9naWxsY2hyaXN0aWFuL3RzcGxheS5kZXZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHJhbnNmb3JtZXIgVGltZWxpbmVcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLXRyYW5zZm9ybWVyLXRpbWVsaW5lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxldHMgeW91IHNlZSBlYWNoIHN0YWdlIG9mIHRoZSB0cmFuc2Zvcm0gcHJvY2VzcyBmb3IgYSBUeXBlU2NyaXB0IEpTICsgRFRTIGVtaXQgYXMgYSB0aW1lbGluZS5cIixcbiAgICBhdXRob3I6IFwib3J0YVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL29ydGEvcGxheWdyb3VuZC10cmFuc2Zvcm1lci10aW1lbGluZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDbGlwcHlcIixcbiAgICBpZDogXCJwbGF5Z3JvdW5kLWNsaXBweVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJGaW5hbGx5LCBzb21lb25lIHdobyBoYXMgYW4gYW5zd2VyIGZvciBldmVyeSBwcm9ibGVtIGluIHlvdXIgUGxheWdyb3VuZFwiLFxuICAgIGF1dGhvcjogXCJvcnRhXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLWNsaXBweVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcmVzZW50YXRpb24gTW9kZVwiLFxuICAgIGlkOiBcInR5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQcmVzZW50IHlvdXIgVHlwZVNjcmlwdCB0YWxrIGRpcmVjdGx5IGluIHRoZSBwbGF5Z3JvdW5kLCBwb3dlcmVkIGJ5IEdpdEh1YiBnaXN0cyFcIixcbiAgICBhdXRob3I6IFwib3J0YVwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL29ydGEvcGxheWdyb3VuZC1zbGlkZXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2l0SHViIEV4cGxvcmVyXCIsXG4gICAgaWQ6IFwidHMtcGxheWdyb3VuZC1wbHVnaW4tZ2l0aHViLWV4cGxvcmVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwbG9yZSBhIEdpdEh1YiByZXBvIG9uIFR5cGVTY3JpcHQgcGxheWdyb3VuZFwiLFxuICAgIGF1dGhvcjogXCJlbW51ZGdlXCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS90cy1wbGF5Z3JvdW5kLXBsdWdpbi1naXRodWItZXhwbG9yZXJcIixcbiAgfSxcbl07XG4iXX0=