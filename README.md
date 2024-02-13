# CART - 456 : Computation Lab Internship

## Weekly agenda and journal

1. [Week 1](#week-1)
2. [Week 2](#week-2)
3. [Week 3](#week-3)
4. [Week 4](#week-4)

### Week 1

#### Agenda:

Review of proposal;

- Review of outline (263) - Week 1 : outline review - Week 2 : Javascript review (Constants, Object parameters, First-class functions)
  1st and 2nd workshop<br>
- 1st Workshop: OOP / P5 to vanilla, documentation workshop —
- 2nd workshop: continuation or student choice (questionnaire)
  tips for doing a workshops
  How should I break it down? What’s too little, what’s too much?
  Finding the right pace
- Timeline: January 26th and February 9th

#### Journal

While writing my ([very modest](https://sarah-hm.github.io/CART-456/p5-and-beyond/)) game for my P5 to Vanilla JavaScript workshop, I was reminded of one of my main challenges during my first Creative Computation courses. For one, I lacked perspective on the greater scope of vanilla JavaScript and what it could do better than P5. However, that made me mostly fail to recognize how P5 could work within other native JavaScript, HTML and CSS functions, to access its full potential.<br>
<br>
Instead of designing the original intended workshop, aiming to translate as accurately as possible a P5 project unto vanilla JavaScript, I’ve decided to tweak it in a way that shows how P5 and vanilla can be used to their advantages and work better, together.
P5.js is a great tool to visualize designs and games; however, it is not incredible at navigation systems, which a lot of interfaces require. On the other hand, HTML and JavaScript’s event listeners do a pretty great job at managing such tasks, namely with buttons; they are however not so easy to use to sketch drawings as P5 is. Inspired by projects like Vera Van Der Seyp's [Computational Knitting](https://www.media.mit.edu/projects/computational-knitting-patterns/overview/) projects that blends [HTML form and P5 canvas](https://knit.veravandeseyp.com/), I aim to show students that P5 can be used in myriad conjonctions with vanilla JavaScript and other libraries.<br>
<br>
In this small 2 hour workshop, I will overview three different options/versions of how to create a button using P5 and/or vanilla JavaScript: one using only P5 shapes and texts, one using a P5 function that dynamically creates an HTML button, and one using a native HTML button with a javaScript event listener.
In [js/script-p5.js](https://github.com/Sarah-hm/CART-456/blob/main/p5-and-beyond/js/script-p5.js), I am starting by showing how I would have originally done a button, when I was taking 253-263; the rect() and text() method with long if() statements on the whereabouts of the mouseX/mouseY work, but the method remains long and unnecessary. In [method 1)](https://sarah-hm.github.io/CART-456/p5-and-beyond/index-p5.html), we will create a button using only P5 shapes, texts and event listeners, so everyone is on the same page.<br>
<br>
I stumbled upon the P5 createButton() function as I was making my way through P5 documentation, and thought it could be a good bridge to explain how exactly P5 dynamically creates HTML tags on the document. CreateCanvas() remains a bit of an abstract function that we just learn we should be doing; I hope that by explaining what createButton() is and further down how to create a button manually, that the functionality of createCanvas() also becomes clearer for students. The P5 createButton() function lacks extensive customization options, hence becomes a good transition into HTML button tags and CSS properties.<br>
<br>
The third method, in [js/script.js](https://github.com/Sarah-hm/CART-456/blob/main/p5-and-beyond/js/script.js), is more extensive and uses HTML, CSS, vanilla JavaScript and the P5 canvas. I originally thought I wanted to translate the entirety of the canvas onto a no-dependency project. I am now more incline to showing how the best parts of P5 can be taken to their full potential if we remove from the canvas what other parts of (vanilla) JavaScript, HTML, and CSS do more efficiently. Taking the quite universal button as an example, I’ll overview the document’s hierarchy, class and ID naming system, function callbacks within the tags, and all relevant CSS properties.<br>
<br>
I aim to showcase how HTML and vanilla JavaScript manage navigation and event listeners efficiently and how to incorporate their advantages with what students have already learned about P5. One of the most awkward memory of my first year in CART is not knowing how to use the P5 canvas within the greater HTML document; the abstraction of coding was overwhelming and I just could not bring myself to visualize that bridge in my head. I hope that bringing a purely P5 constructed function into a more efficient native ‘equivalent’, while keeping the same canvas (and player) interaction, will be a clear example for students on how to make P5 work in the larger scope of JavaScript.<br>

#### Workshop

Title: JavaScript with P5 & Beyond (ft. HTML and CSS)<br>
Date: January 26th, 2024<br>
Time: 2 pm to 5 pm;<br>
Location: 7.745 (Garage door classroom by the elevators)<br>
Overview: Develop an understanding of vanilla JavaScript and how to incorporate it with the P5 canvas. Using P5 sketching functions introduced in CART-253, we will transfer user interaction to a navigation system using HTML tags and native JavaScript event listeners.
Required level: some P5.js, minimal HTML, CSS can help but not required.<br>
Material requirement: bring your own machine with code editor installed (e.g., Visual Code)<br>

### Week 2

#### Agenda:

Sabine meeting on 23rd at 1pm.
Agenda:

- Review Workshop outline + files;
- Edits based on review + final outline;
- Workshop prep (room, sending files, admin, etc);
- Project Research prep;
- January 26th: Workshop I

#### To do

- Editing the workshop files, making the outline, and preparing all the resources for the event;
- Teaching the workshop (crying face emoji);
- Figuring it out the move for my internship project/workshop II;
- Second JavaScript workshop ???

#### Journal

I survived my first ever workshop, so that is one thing. <br>

Turn out was low, but it made me more comfortable to approach the subject in a more intimate way. I believe there is also much to learn on the organization and advertisement of such events, but that will only come with practice. Doing a workshop at the very beginning of the semester was already a long-shot, but I remain very pleased with how it turned out. <br>
I was not only able to go through the material mostly unscathed, but I also genuinely sensed that I was driving a point across. With the advice of Sabine, I finished off with a very short exercise to build upon the files we had overviewed. The participants each found ways to further their documentation skills and find new events to impact different things on and off the canvas. I appreciated the variety of interests as well; from setting intervals with mousedown() and mouseup(), to styling through CSS event selectors. I really enjoyed assisting them through both the questions they had during, and after the workshop.<br>
I am overall very happy with the result—could have been better, but there is always space for improvement, which is a pretty good thing. I am disappointed I forgot to record the workshop as requested (re: crying face emoji), making me appreciate Sabine’s presence at the workshop that much more. I am feeling better equipped for the next one—which I am already looking forward to. <br>
<br>
However, I need to start focusing on my main project a little bit more. I had wildly underestimated the resources needed to produce and give a workshop, especially one you know the subject of very well. It is one thing to know JavaScript, but to break it down in manageable and practical pieces, and then actually teaching it, is an entire other ordeal. <br>
I want to avoid incapacitating the development of my project by giving two workshop on JavaScript at the very beginning of the semester, as I originally intended. I am most definitely set on learning openFrameworks, as it would allow me to experiment with real-time video mapping in junction with Arduino—but for that, I need to dive deep into C++, which I have not done in years. I am also adamant that on top of my own openFrameworks project, I will be producing a introductory workshop on the framework set to be on March 22nd. To be able to fulfill my (C++) goals elegantly, I may have to rethink and discuss the feasibility of the second JavaScript workshop.

### Week 3

#### Agenda

Sabine meeting on 30th at 2pm.
Agenda:

- Debrief workshop;
- JavaScript second workshop (?);
- TouchDesigner 100 series.

#### To do

- Derivative TouchDesigner 100 series [here](https://learn.derivative.ca/courses/100-fundamentals/lessons/101-navigating-the-environment/)
- Exploring how to utilize TD as a framework for a large scope project

#### Journal

While my resources were stretched thin this past week, my clumsy overestimation of my capacity to gather python skills like a breeze made me fail my intended goal of going through the full Derivative tutorials. I rather spent time doing all the exercises overviewed in the tutorials and furthering them instead. I went through all the TOPs and CHOPs tutorials—sprinkled with other bits of other operators, and was already overwhelmed by the affordances that the framework has. I have not done extensive math in a while; the idea of having to (re)assimilate it while building my python understanding is intimidating. I find that going back and producing exercises on my own without the assistance of a ‘live-coding’ session (the video tutorials) to be a worthwhile—though time consuming, methodologies. While the myriad operators expand the possibilities of my project far beyond what I thought was possible, I need to remember exactly what and where they are, and how to use them, if I want them to be beneficial in any capacity.<br>
I know that I want to use camera (kinect) input for my project, so I try to translate most exercises to ways it could be applied to it (using my webcam). Of course, the kinect is used a little differently in TouchDesigner, but I have yet to create structures nuanced enough to actually need that kind of input. I’ll learn more about the 3D aspects of my project in the next chapter on Surface Operators.<br>
The aspect of time will also be very important for my project, so spending more time understanding how to trigger events through different constants was meaningful as well. Even in these simple node structures, I quickly recognized how impactful the refinement of complex mathematical equations was on outputs. More math means more beauty. Who would have thought (I will make myself a few enemies with that one). Needless to say, I am slightly out of my depth when it comes to the abstraction of mathematics. To understand the full scope of TouchDesigner, I may have to spend a chunk of time diving into math notions that are relevant to the framework. But more on that in our meeting.<br>
As for my project, I have many questions that remain unanswered, which I will dive into this week. I know I am producing a TouchDesigner tool to assist in the creation of our project Symphenia, done in the scope of the Convergence Class. My team and I’s project is an amalgam of differently sized canvas, arranged on a wall in a photo gallery fashion. The canvas are discreet objects, fully detached from one another. They should however reaction in unison according to their placement—imagine a ricochet on a liquid surface. I aim to produce a structure that is modular and encompassing enough to allow customization (when we inevitably change our minds 8743892 times on the final look of the thing) with little change on the software side.<br>
<br>
[ Will insert pictures of my exercises very shortly]
<br>

### Week 4

#### Agenda

Sabine meeting on 7th at 2pm.
Agenda:

- Talking about the project: ideas and limitations
- Python & Math reco

#### To do

- Finish TouchDesigner 100 series Tutorial [here](https://learn.derivative.ca/courses/100-fundamentals/lessons/101-navigating-the-environment/) and, on advice of Sabine, chill out while I figure out what exactly TouchDesigner is, what’s it’s capable of, and mostly just avoid falling into rabbit holes that are beyond the complexity level that I am at right now.

#### Journal

I finished the tutorials. I don’t feel much more comfortable to start a project from scratch on my own, but I do understand a lot more what TouchDesigner is capable of, and have a general idea of where everything is and how to interact with it. I recognized how fun DAT operators could be in live interactive experiments/experiences, and I’m really excited to start meddling in that. <br>
My main (and maybe only) negative take away from this series is that the Kinect does not, in fact, run on Apple’s arm architecture, the only OS I have available. That limitation creates a bit of a hiccup for my projects, but it will be a good opportunity to research other less mainstream, but perhaps more interesting, data inputs. I can also easily find ways to emulate a Kinect input until I have an non-silicon OS available, if that is the goal. <br>
I also gained a lot of interest in the freedom Python expressions allow in the customization of parameters. A node-based framework can sometimes feel limiting when coming from a more coding oriented practice. The way TD embeds callbacks and allows full custom script writing allows for so much to be done… And may get me in a few endless rabbit holes if I don’t control myself for the time being. <br>
So instead of overdoing it by trying to figure out things far beyond my current skill range, I want to spend the next week documenting myself on specific topics I already have an inclined for, and start a (small) project/exercise based on pre-built TouchDesigner snippets. I would want to:<br>

### Week 5

#### Agenda

- Read more on Python expression documentation, familiarizing myself with TD nomenclature
- Practice OSC in with SIM ZIG app (cellphone sensors’ inputs)
- Practice DAT executes (using OSC in)
- Exploring TD available snippets and their structures (how are they connected, referenced, binded, …), edit and layer a variety to create a ~final ’perform’ (e.g., Line Mat/vectors from TOPs)
- Explore palette operators (e.g., rgbaDelay, noise, stoner, particleGPU)
