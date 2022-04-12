export const PagesIterableMixin = () =>
    class {
        [Symbol.iterator]() {
            let idx = 0;
            const typographyInstance = this;
            //@ts-ignore
            const pages = typographyInstance.pages.pages;

            return {
                next() {
                    if (idx < pages.length) {
                        const firstPart = typographyInstance.toString();
                        const secondPart = pages[idx].toString();

                        idx++;

                        return {
                            value: `${firstPart}, ${secondPart}`,
                            done: false,
                        };
                    } else {
                        return {
                            value: null,
                            done: true,
                        };
                    }
                },
            };
        }
    };
// export const PagesIterableMixin = () =>
//     class {
//         [Symbol.iterator]() {
//             let idx = 0;
//             // eslint-disable-next-line @typescript-eslint/no-this-alias
//             const o = this;
//             const keys = Object.keys(o);
//             return {
//                 next() {
//                     idx++;
//                     if (idx > keys.length) {
//                         const firstPart = o.toString();
//                         const secondPart = (o[keys[idx] as unknown as keyof typeof o] as any).pages[idx - 0].toString();
//                         return {
//                             value: `${firstPart},${secondPart}`,
//                             done: false,
//                         };
//                     } else {
//                         return {
//                             value: null,
//                             done: true,
//                         };
//                     }
//                 },
//             };
//         }
//     };
