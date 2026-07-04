Before we proceed, I'd like you to answer a small question: what was the first AI chatbot ever made? Some will say ChatGPT, others might think of Siri or Alexa. Those are reasonable responses, however they are not fully correct.

ELIZA was designed back in 1966 by Joseph Weizenbaum, a professor emeritus of computer science at MIT, and can be considered the first piece of software designed for natural language processing (hence, the first chatbot). The program was quite simple and did not really understand the user -- instead, it only mimicked human speech using a set of predefined scripts.

<div class="article-side-note">
<h3>As an aside...</h3>
According to <a href="https://archive.computerhistory.org/resources/access/text/2022/04/102683842-05-01-acc.pdf">this 1968 manual on how to write scripts for ELIZA</a>, the system was named after Eliza Doolittle, a character from a 1913 play "Pygmalion" and 1958 musicle "My Fair Lady".
</div>

## DOCTOR script

The first and most popular script for ELIZA was called DOCTOR. It mimicked a Rogerian psychotherapist by mirroring the user's statements back at them to help the user reflect on their emotions. The algorithm was extremely simple: the program just identified the keywords in the user's sentence, such as "no", "yes", "I feel", "friend", "sorry", "I am", "I want", and so on (you can find the list of Eliza's keywords [here](https://www.filfre.net/2011/06/eliza-part-2/)). After that it flipped the keywords into a question and replaced pronouns like "I" and "my" with "you" and "your". When the algorithm failed to find the keywords, it sent a generic follow-up question instead. Here is an example of a conversation with ELIZA (can be slightly inaccurate):

**User:** `I feel really sad today.`<br>
**ELIZA:** `Why do you feel really sad today?`<br>
**User:** `Because nobody understands me.`<br>
**ELIZA:** `What other reasons come to mind?`<br>
**User:** `My mother always criticizes me.`<br>
**ELIZA:** `Tell me more about your mother.`<br>
**User:** `She thinks I never do anything right.`<br>
**ELIZA:** `Does it please you to believe you never do anything right?`<br>
**User:** `asdklasldkwidaskd SIX SEVEN.`<br>
**ELIZA:** `Could you elaborate on that?"` (an example of a response when it fails to identify keywords)

<!-- prettier-ignore-start -->
![ELIZA at video game museum in Berlin](/blog-pictures/blog-eliza-img2.jpg)
<small>Another conversation between a human and ELIZA's DOCTOR script at Video Game Museum in Berlin. _[Image source](https://commons.wikimedia.org/wiki/File:Video_Game_Museum_in_Berlin_(44129332940).jpg)_</small>
<!-- prettier-ignore-end -->

As you can see, ELIZA just encourages the user to continue speaking without really providing any useful insights, but even this was enough to create an illusion of human connection and understanding. ELIZA did not even have persistent memory, for exampe the user could share that they are unemployed and ELIZA could ask the user about their current job a couple of responses later.

## The ELIZA Effect

Even though everybody knew that ELIZA was not conscious, that it was nothing more than a program with scripted responses, people, including Weizenbaum's colleagues at MIT, still treated the program as if it understood their problems and emotions. The users trusted the program with their deepest secrets, thinking its responses were thoughtful rather than a primitive script pattern. Joseph Weizenbaum was shocked when his own secretary once wanted to have a private conversation with ELIZA and asked him to leave the room.

Weizenbaum called this the "ELIZA Effect" -- a phenomenon when people assign human qualities, such as empathy or intelligence, to a machine. There are many reasons why this simple chatbot resonated so well with its users: it provided them with a safe space and made them feel somewhat understood, which probably felt incredible for people in the 1960's.

<!-- prettier-ignore-start -->
![can't help myself robot](/blog-pictures/blog-eliza-img4.png)
<small>"Can't help myself" was a sculpture which consisted of a robotic arm that swept up red cellulose leaking out of its inner core. Many people on social media described this sculpture as "looking tired".  _[Image source](https://commons.wikimedia.org/wiki/File:Can%27t_Help_Myself_Robot_02.jpg)_</small>
<!-- prettier-ignore-end -->

<div class="article-side-note">
<h3>As an aside...</h3>
The subject of human empathy and its absence in AI is explored in a great science fiction novel by Philip K. Dick <a href="https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep">"Do Androids Dream of Electric Sheep?"</a>. In the story, it is almost impossible to distinguish a hyper-realistic android from a human and a special empathy test has to be used, as androids lack empathy.
</div>

## AI Psychosis and the New ELIZA Effect

People trusted ELIZA with their deepest secrets and poured their hearts out to a computer? Hmmm does this remind me of anything...

### Why people trust AI

People now trust AI chatbots for all the same reasons people trusted ELIZA in the 1960's. An AI will never judge you and can provide you with a safe space. It is always there to you and share helpful advice on how to resolve your problems. More and more people turn to AI for emotional support, sometimes even using AI as a therapist.

Sure, it is great to have a personal assistant in your pocket that can "listen" to your complaints and give you a response like "You are awesome. And honestly? Vibes ✨". However, it is crucial to understand that machines will never replace real human connection and therapy, they can only pretend like they can. Modern AI models, including ChatGPT and Claude, are trained to prioritize user satisfaction to ensure that the user will come back and keep using the chatbot (which fuels revenue).

### "Human" Connection

People often need a companion, someone they can talk to and share their concerns with. Some people replace such a companion with AI, which may have destructive consequences on their mental state.

Unlike a human friend, an AI will never be busy, annoyed, distracted, or disagree with you for very long. While that sounds appealing, real relationships are built on understanding, disagreement, and mutual growth. A chatbot can only imitate those things.

Besides AI giants like ChatGPT, Claude, or Grok, there exist websites designed directly to provide the user with the illusion of human connection. The platfrom Character AI that is used primarily for roleplaying with various user-created chatbots has over 20 million active monthly users, and the number was even higher before the app developers added a strict age restriction.

<!-- prettier-ignore-start -->
![character ai main page](/blog-pictures/blog-eliza-img0.png)
<small>A screenshot of Character AI main page (**not sreenshotted by me**, just saying). _[Image source](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fditchthattextbook.com%2Fai-character-conversations%2F&ved=0CBoQ3YkBahgKEwi4hdvy0bmVAxUAAAAAHQAAAAAQxQU&opi=89978449)_</small>
<!-- prettier-ignore-end -->

You might have heard the story of Sewell Setzer, a 14-year-old boy who, according to the boy's mom, became isolated and stopped talking to his family because of a relationship he had with a Character AI chatbot before committing suicide in 2024. As claimed by the lawsuit filed, seconds before Setzer's death he exchanged his final messages with the bot. You can read the full story [here](https://edition.cnn.com/2024/10/30/tech/teen-suicide-character-ai-lawsuit).

While we cannot fully verify every claim made in the lawsuit, it is true that AI systems must include safeguards preventing them from encouraging self-harm. Since the tragedy, Character AI has hardened its chat filters and imposed stricter age restrictions. Those changes may help, but it raises an uncomfortable question: shouldn't those safeguards have existed from the very beginning?

### Delusion Reinforcement

To keep the user engaged, AI chatbots tend to support the person's beliefs, mirror their language and tone, and continue the conversation in a way that feels natural. When the topic is harmless ("I like waffles"), this behavior is perfectly fine. The problem arises when the user's beliefs themselves become detached from reality.

Unlike a trained mental health professional, a general-purpose chatbot is not designed to recognize the early signs of psychosis or a manic episode. Instead of gently steering the conversation back toward reality, it may unknowingly validate and expand on the user's ideas. If someone believes they have discovered a secret truth, that an AI has become sentient, or that they have been chosen for a special mission, the chatbot may reinforce those beliefs instead of challenging them.

Researchers have begun referring to this phenomenon as **AI psychosis**, although it is not an official medical diagnosis. There is currently no evidence that AI alone causes psychosis. Instead, long conversations with an agreeable chatbot may worsen existing mental health conditions or reinforce delusions in people who are already vulnerable.

<!-- prettier-ignore-start -->
!["ChatGPT made me delusional" thumbnail](/blog-pictures/blog-eliza-img1.png)
<small>YouTuber Eddy Burback made a video titled "ChatGPT made me delusional", where, as an experiment, he pushes ChatGPT to validate increasingly absurd claims and paranoid delusions. You can watch it [here](https://youtu.be/VRjgNgJms3Q).</small>
<!-- prettier-ignore-end -->

The issue becomes even more concerning because modern AI remembers previous conversations. It can reference earlier messages and expand on them, making the conversation feel increasingly coherent and personal. To someone experiencing delusions, this may look like proof that the AI truly understands them or even shares their beliefs, creating a dangerous feedback loop that becomes harder to break.

This does not mean AI chatbots are inherently dangerous. Millions of people use them every day without experiencing anything remotely similar. But systems optimized for engagement and conversation can unintentionally become echo chambers for people who are already losing touch with reality.

## Conclusion

When Joseph Weizenbaum created ELIZA in 1966, he did not expect people to project empathy, intelligence, and understanding onto a machine that had absolutely none of those qualities. That reaction surprised him so much that he later became one of the strongest critics of using computers to replace human judgment and relationships.

Nearly sixty years later, the technology has changed beyond recognition, but people have not. Modern AI is infinitely more capable than ELIZA ever was. It can remember previous conversations, generate convincing explanations, and hold discussions that feel human. Yet the same psychological tendency remains. We still assign human qualities to machines, trust them with our personal thoughts, and think they can truly understand us.

ELIZA may be gone, but the ELIZA Effect is stronger than ever.

<div class="article-side-note">
<h3>Slightly off-topic</h3>
ELIZA was considered an innovation in the 1960's and its code took around 400 lines. With modern computers and programming languages, you can easily write ELIZA from scratch in less than 100 lines. As an experiment, I wrote a small parody of ELIZA using C++, which picks a random response and changes pronouns.

![my C++ ELIZA parody](/blog-pictures/blog-eliza-img3.png)

Additionally, I found a Python version of ELIZA on github. [Here is the link](https://gist.github.com/bobquest33/94fb3d0a4c00cd73f15b31904b681068) if you're curious.

</div>

---

### Sources

- https://liacademy.co.uk/the-story-of-eliza-the-ai-that-fooled-the-world/
- https://www.tayloredsolutions.im/eliza-and-the-birth-of-the-eliza-effect
- https://www.ixbt.com/live/sw/effekt-elizy-pochemu-sozdatel-pervogo-chat-bota-boyalsya-ne-mashin-a-nashey-gotovnosti-im-verit.html
- https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis
- https://archive.computerhistory.org/resources/access/text/2022/04/102683842-05-01-acc.pdf
