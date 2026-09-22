---
tags:
 - jvm
title: "returnType"
---

# returnType

<div class="dokka-symbol-block" style="background: color-mix(in srgb, var(--md-code-bg-color) 30%, transparent); margin-top: 0.5rem; padding: 1px .7rem .2rem .7rem; border-radius: 0.5rem;" markdown>

<div markdown>

<div class="highlight"><pre><code class="md-code__content"><span markdown><span class="kd">context</span><span class="p">(</span>session<span class="o">: </span><a href="../org.jetbrains.kotlin.analysis.api/-ka-session/index.html">KaSession</a><span class="p">)</span>
<span class="kd">val </span><a href="../../psi-api/org.jetbrains.kotlin.psi/-kt-declaration-with-return-type/index.html">KtDeclarationWithReturnType</a><span class="p">.</span><a href="return-type.html">returnType</a><span class="o">: </span><a href="../org.jetbrains.kotlin.analysis.api.types/-ka-type/index.html">KaType</a>
</span></code></pre></div>
</div>


<div markdown>

The return type of the given [`KtDeclarationWithReturnType`](../../psi-api/org.jetbrains.kotlin.psi/-kt-declaration-with-return-type/index.md).

Note: For a `vararg foo: T` parameter, the resulting type is the full `Array<out T>` type (unlike [`KaValueParameterSymbol.returnType`](../org.jetbrains.kotlin.analysis.api.symbols/-ka-receiver-parameter-symbol/index.md#returntype), which is `T`).

The reasoning behind this is that [`KaCallableSymbol.returnType`](../org.jetbrains.kotlin.analysis.api.symbols/-ka-receiver-parameter-symbol/index.md#returntype) sees the parameter from the declaration's semantic perspective, representing the signature of the parameter, which contains just the element type. In this paradigm, `vararg` arrays are constructed separately under the hood.

At the same time, [`KtDeclaration.returnType`](-ka-expression-type-provider/index.md#returntype) from [`KaExpressionTypeProvider`](-ka-expression-type-provider/index.md#returntype) represents a use-site perspective, which has to desugar `vararg` parameters because they are consumed as array types.


</div>

</div>
