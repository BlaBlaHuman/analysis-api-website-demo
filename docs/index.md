---
icon: lucide/rocket
hide:
  - navigation
---
<h1 style="text-align: center;"><img alt="</> logotype" src="assets/logo.png" width="100" height="100" style="vertical-align: middle;"> Kotlin Analysis API</h1>

The **Kotlin Analysis API** is a library for analyzing Kotlin code at the semantic level. It provides a structured way to query information
about Kotlin code, including symbols, types, and semantic relationships between them. Built on top of Kotlin's
[PSI](https://plugins.jetbrains.com/docs/intellij/psi.html) syntax trees, the API offers a clean abstraction over the compiler's internal
representations, making it accessible both for IDE plugin makers and command-line tool developers.

**Analysis API** provides a graceful and clean way to access **Kotlin** compiler internals for you
to write your own **Kotlin** tooling and analyzers. Take a look at the following analysis example and see for yourself!

```kotlin
fun checkCallWithReceiverAndRenderSignature(functionCall: KtCallExpression): String? = analyze(functionCall) {
    val resolvedFunctionCall: KaFunctionCall<*> = functionCall.resolveSuccessfulCall() ?: return null

    val extensionCallReceiver: KaReceiverValue = resolvedFunctionCall.extensionReceiver ?: return null
    val actualReceiverType: KaType = extensionCallReceiver.type

    val resolvedFunction: KaFunctionSymbol = resolvedFunctionCall.symbol

    val expectedReceiverType: KaType = resolvedFunction.receiverType ?: error("Function doesn't expect any receiver!")

    if (!actualReceiverType.isSubtypeOf(expectedReceiverType)) {
        error("Type mismatch!")
    }

    return resolvedFunction.render()
}
```

## Get Started

// TODO

## Read about Analysis API

- [The Story Behind K2 Mode and How It Works - JetBrains Blog](https://blog.jetbrains.com/idea/2025/04/the-story-behind-k2-mode-and-how-it-works/)

## Projects using Analysis API

* [Kotlin IntelliJ Plugin](https://plugins.jetbrains.com/plugin/6954-kotlin) - official Kotlin plugin for **IntelliJ IDEA**
* [Kotlin Dokka](https://github.com/Kotlin/dokka) - Kotlin documentation generator
* [KSP](https://github.com/google/ksp) - Kotlin Symbol Processing API by Google
* [Detekt](https://github.com/detekt/detekt) - Static code analysis for Kotlin
* And more

Have a project using **Analysis API**? Contact us to be listed here!

## Contributing

**Analysis API** source code lives inside *`analysis`* directory in the [**Kotlin** compiler](https://github.com/JetBrains/kotlin) repo.
We are open sourced and welcome any external contributions.
Check out [our contribution guidelines](contribution-guide/index.md) to get started.

## Contact Us

### Report an Issue

**Kotlin Analysis API** works with [**JetBrains YouTrack**](https://youtrack.jetbrains.com/issues/KT) task management system.
To report an issue you've encountered, please select **KT** project as well as a suitable
**Analysis API** subsystem when creating a ticket.

### Our Team

[Here](https://github.com/orgs/JetBrains/teams/kotlin-analysis-api-engineering) you can find a list of all current team members.
