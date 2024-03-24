type EnMessages = typeof import("./messages/en.json");
type SkMessages = typeof import("./messages/sk.json");
type RuMessages = typeof import("./messages/ru.json");

declare interface IntlMessages extends EnMessages, SkMessages, RuMessages {}
