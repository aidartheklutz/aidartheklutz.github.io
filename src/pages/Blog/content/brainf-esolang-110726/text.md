An **esoteric programming language** (or esolang) is a programming language created not for practical use, but to explore weird ideas, challenge programmers, or simply for fun. Despite their niche nature, esolangs have a small yet active online community. Enthusiasts design new unusual languages, write programs in them, and discuss their capabilities on internet forums.

Among the hundreds of esoteric programming languages that have been created, one stands out by far the most: Brainf\*ck, created in 1993. You can find an example of Brainf\*ck syntax on the cover of this article. Since its creation it has become a major meme among programmers and has influenced many other esolangs.

## The Creation of Brainf\*ck

A compiler is a program that translates code written in a programming language into instructions that a computer can execute. The closer a programming language is to a computer's native instruction set, the less translation the compiler has to perform. Since a computer natively understands only binary machine code, languages that are closer to binary are easier to compile.

<!-- prettier-ignore-start -->
![simplified compiler diagram](/blog-pictures/blog-brainf-esolang-img0.png)
<small>A simplified diagram of the compilation process of compiled languages: the source code is the instructions written by a programmer in a human-readable programming language (e.g., C++, C, or Rust). A special program called a compiler translates this code into machine code, a set of binary instructions understood by the computer's processor. When the processor executes the machine code, it produces the program's output.</small>
<!-- prettier-ignore-end -->

In 1993, a Dutch software engineer [Wouter van Oortmerssen](https://strlen.com/) created FALSE, an intentionally minimal programming language with the smallest possible compiler. For reference, C++ compilers can reach around 15 megabytes in size. FALSE's compiler, however, was only 1024 bytes -- almost 15 **thousand** times smaller.

Urban Müller, a student from Switzerland, took inspiration from FALSE and challenged himself to create an even more extreme language with a lighter compiler. He designed Brainf\*ck to be as close to raw machine operations as possible, even more barebones and primitive than FALSE. Müller achieved his goal, and the original Brainf\*ck compiler was just 240 bytes, four times smaller than FALSE's. This extreme miniaturization came from the language's extreme simplicity: it consists of only eight commands: `>`, `<`, `+`, `-`, `.`, `,`, `[`, and `]`.

A compiler this small comes with an obvious drawback: the source code becomes extremely difficult for humans to read and understand. The only benefit of such a compact compiler is that it takes up less storage space on the computer. However, utility and convenience was not important at all, challenging programmers was precisely the goal of esolang creators like Wouter van Oortmerssen and Urban Müller.

## How Brainf\*ck Works

Brainf\*ck operates on an array of memory cells. Each cell is like a small storage box that holds a number (typically a byte value from 0 to 255), starting at zero. A pointer indicates which cell the program is currently working with. The language has only eight commands:

<table>
  <thead>
    <tr>
      <th>
        Symbol
      </th>
      <th>
        What it does (in plain English)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px 16px;"><code>&gt;</code></td>
      <td style="padding: 12px 16px;">Moves the pointer to the next cell</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>&lt;</code></td>
      <td style="padding: 12px 16px;">Moves the pointer to the previous cell</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>+</code></td>
      <td style="padding: 12px 16px;">Increases the number in the current cell by one</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>-</code></td>
      <td style="padding: 12px 16px;">Decreases the number in the current cell by one</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>.</code></td>
      <td style="padding: 12px 16px;">Prints the character represented by the number in the current cell</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>,</code></td>
      <td style="padding: 12px 16px;">Reads one input character and stores its value in the current cell</td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>[</code></td>
      <td style="padding: 12px 16px;">If the current cell is 0, jump forward to the matching <code>]</code></td>
    </tr>
    <tr>
      <td style="padding: 12px 16px;"><code>]</code></td>
      <td style="padding: 12px 16px;">If the current cell is not 0, jump backward to the matching <code>[</code></td>
    </tr>
  </tbody>
</table>

This extremely limited instruction set is enough to make Brainf\*ck [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness): technically, you can perform any kind of computational task using this language if you give it enough time and memory. In reality, even simple algorithms often require hundreds of lines of code and painstaking manual memory management.

Let's take a look at a visual example. In the beginning, all memory cells we're working with are empty and the pointer (denoted with an upside down triangle) is at the first cell:

![step 0](/blog-pictures/blog-brainf-esolang-step0.png)

When we write `++++`, the cell at which we're pointing gets increased by 1 four times:

![step 1](/blog-pictures/blog-brainf-esolang-step1.png)

After that, when we write `>>`, the pointer moves two cells to the right:

![step 2](/blog-pictures/blog-brainf-esolang-step2.png)

`+++++` adds 5 to the current cell:

![step 3](/blog-pictures/blog-brainf-esolang-step3.png)

When we want to go one cell to the left, we can use `<`:

![step 4](/blog-pictures/blog-brainf-esolang-step4.png)

Let's increment this cell two times by writing `++`:

![step 5](/blog-pictures/blog-brainf-esolang-step5.png)

The resulting code is:

```brainfuck
++++>>+++++<++
```

This already looks quite confusing, and this code doesn't even do anything meaningful. Here is another example:

```brainfuck
++++++++[>++++++++<-]>+.
```

This program increases a memory cell until it reaches the value needed for the letter "A" and then prints it. For reference, this is how this same program would look in Python:

```python
print("A")
```

Now imagine how much time it would take to write a program that simply prints words in Brainf\*ck. The example below outputs "Hello, World!" to the console:

```brainfuck
>++++++++[<+++++++++>-]<.
>++++[<+++++++>-]<+.
+++++++..
+++.
>>++++++[<+++++++>-]<++.
------------.
>++++++[<+++++++++>-]<+.
<.
+++.
------.
--------.
>>>++++[<++++++++>-]<+.
```

Moreover, Brainf\*ck has no variables, functions, or named memory locations. The programmer must mentally track which cell holds which value at all times. And yet, technically you can still implement any algorithm you'd like.

## Brainf\*ck Variations

Brainf\*ck's unusual design inspired many programmers to create their own variations of the language. Some of these languages kept the same basic idea and computational model but changed the way the code looked. For example, Ook! replaced Brainf\*ck's symbols with combinations of the words "Ook", "Ook?", and "Ook!", making programs appear as if they were written by an orangutan.

<!-- prettier-ignore-start -->
!["Hello, world!" in Ook!](/blog-pictures/blog-brainf-esolang-img1.png)
<small>A program that outputs "Hello, world!" in the Ook! esoteric programming language. You can learn more about Ook! by following the link to the image source. _[Image source](https://esolangs.org/wiki/Ook!)_</small>
<!-- prettier-ignore-end -->

Another esolang, known as COW, took a similar approach: Brainf\*ck commands were replaced with different arrangements of the word "moo".

<!-- prettier-ignore-start -->
!["Hello, world!" in COW](/blog-pictures/blog-brainf-esolang-img2.png)
<small>A program that outputs "Hello, world!" in the COW esoteric programming language. You can learn more about COW by following the link to the image source. _[Image source](https://esolangs.org/wiki/COW)_</small>
<!-- prettier-ignore-end -->

Beyond simple variations, Brainf\*ck also influenced the development of completely different esoteric languages, including [Whitespace](https://esolangs.org/wiki/whitespace), which uses only spaces, tabs, and line breaks as instructions, and [Piet](https://esolangs.org/wiki/piet), where programs are created as colorful images.

## Conclusion

Brainf\*ck is one of the clearest examples of how programming can exist outside the boundaries of practicality. Although nobody would realistically use Brainf\*ck to build everyday software, its influence on esoteric programming languages and programming culture remains significant.

Programming is not only about solving problems efficiently, but also about understanding how computers work, exploring unusual concepts, and sometimes creating something simply because it is interesting. In a world where programming languages are usually designed to make development easier, Brainf\*ck, as well as many other esolangs, stand out by doing the exact opposite.

You can read more about esoteric programming languages on [Esolang Wiki](https://esolangs.org/wiki/Main_Page). It has a really awesome community.

---

### Sources

- https://esolangs.org/wiki/Esoteric_programming_language
- https://theoutline.com/post/825/brainfuck-coding-languages
- https://esolangs.org/wiki/Brainfuck
- https://therenegadecoder.com/code/hello-world-in-brainfuck/
- Diagrams made by me :)
