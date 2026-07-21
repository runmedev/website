---
post_title: "You Generated the Skill. It Doesn't Work Yet."
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2026-07-21"
post_image: "skill-doesnt-work-yet-cover.png"
post_excerpt: "A generated skill captures a moment; an eval loop turns it into a method. The catch: generation feels like the finish line, so the loop never gets built. Here's how to pressure-test it."
post_slug: "skill-doesnt-work-yet"
tags: ["developer tools", "ai", "automation", "skills"]
category: "runme"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "cmgeneratedskilldoesntwork"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---

Your agent generated a skill. Good. That was the easy part.

The skill can look right. It may even work beautifully for the repo and task that produced it, under the same assumptions. It may have captured the moment, not the method.

The model was neither careless nor confused. It did exactly what it was trained to do: infer the most likely behavior from the context in front of it. Give it one repo, one task, and one successful outcome, and it cannot reliably tell which details should generalize and which are specific to that instance.

It may reproduce the outcome without capturing the broader capability you thought you captured.

## When Agents Generate Context Blind

What makes it sting is that generated evals have the same problem: they can certify the very overfit they were supposed to catch. If the same model generated both the skill and the test, the eval is not yet an impartial judge. That is like asking a sports team to referee its own game.

Think of the skill as the unit under test and the eval as its test suite. The eval should expose where the skill fakes, skips, or overfits. In turn, surprising passes should reveal weak assertions, missing edge cases, and shortcuts the eval accidentally rewards. That tension is the loop. Each side makes the other sharper.

## Put the Skill Under Pressure

Say we generated a dependency-updater skill.

...
