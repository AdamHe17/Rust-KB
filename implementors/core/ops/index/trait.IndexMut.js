(function() {var implementors = {};
implementors["weak_table"] = [{text:"impl&lt;'a, K, V, S, Q:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>Q&gt; for <a class=\"struct\" href=\"weak_table/struct.WeakKeyHashMap.html\" title=\"struct weak_table::WeakKeyHashMap\">WeakKeyHashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"weak_table/traits/trait.WeakKey.html\" title=\"trait weak_table::traits::WeakKey\">WeakKey</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;K::<a class=\"type\" href=\"weak_table/traits/trait.WeakKey.html#associatedtype.Key\" title=\"type weak_table::traits::WeakKey::Key\">Key</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,&nbsp;</span>",synthetic:false,types:["weak_table::WeakKeyHashMap"]},{text:"impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;&amp;'a K::<a class=\"type\" href=\"weak_table/traits/trait.WeakElement.html#associatedtype.Strong\" title=\"type weak_table::traits::WeakElement::Strong\">Strong</a>&gt; for <a class=\"struct\" href=\"weak_table/struct.PtrWeakKeyHashMap.html\" title=\"struct weak_table::PtrWeakKeyHashMap\">PtrWeakKeyHashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"weak_table/traits/trait.WeakElement.html\" title=\"trait weak_table::traits::WeakElement\">WeakElement</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;K::<a class=\"type\" href=\"weak_table/traits/trait.WeakElement.html#associatedtype.Strong\" title=\"type weak_table::traits::WeakElement::Strong\">Strong</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>",synthetic:false,types:["weak_table::PtrWeakKeyHashMap"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
