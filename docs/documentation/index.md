# Analysis API Documentation

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } [Fundamentals](Fundamentals.md)

    ---

    Core concepts and rules: Kotlin PSI, analysis sessions, and the lifetime rules every API user must follow.

-   :material-label-outline:{ .lg .middle } [Symbols](Symbols.md)

    ---

    `KaSymbol` represents declarations visible to Kotlin — from sources, libraries, and compiler plugins alike.

-   :material-layers-outline:{ .lg .middle } [Scopes](Scopes.md)

    ---

    `KaScope` containers hold declarations, and define the order in which the compiler resolves a name.

-   :material-shape-outline:{ .lg .middle } [Types](Types.md)

    ---

    `KaType` and its hierarchy: type structure, nullability, and the annotations attached to a type.

-   :material-at:{ .lg .middle } [Annotations](Annotations.md)

    ---

    Read and analyze annotations on declarations and types through the `KaAnnotated` interface.

-   :material-arrow-decision-outline:{ .lg .middle } [References and calls](References-And-Calls.md)

    ---

    Two resolution mechanisms — reference resolution for "what does this name point to", call resolution for the rest.

-   :material-dots-horizontal-circle-outline:{ .lg .middle } [Other](Other.md)

    ---

    The remaining functionality: diagnostics, file compilation, Java/Kotlin bridging, statistics, and more.

-   :material-swap-horizontal:{ .lg .middle } __Migration Guides__

    ---

    Porting off the compiler internals, and declaring the result compatible with K2 mode.

    [:octicons-arrow-right-24: Migrating from the Former Type-Building API](TypeCreatorMigrationGuide.md)

    [:octicons-arrow-right-24: Migrating from the Legacy Resolution API](Migrating-Resolution-API.md)

</div>
