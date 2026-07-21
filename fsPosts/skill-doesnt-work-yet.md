---
post_title: "You Generated the Skill. It Doesn't Work Yet."
post_author: "Sebastian Huckleberry"
post_author_avatar: "sebastian-(tiedtke)-huckleberry.jpg"
post_author_url: "https://twitter.com/sourishkrout"
date: "2026-07-21"
post_image: "skill-doesnt-work-yet-cover.png"
post_excerpt: "A generated skill can look right while overfitting the moment that produced it. The fix is a tighter eval loop where the skill and the judge make each other sharper."
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

What makes it sting is that the eval has the same problem: it can certify the very overfit it was supposed to catch. If the same model generated both the skill and the test, the eval is not yet an impartial judge. That is like asking a team to referee its own game.

A good eval should push against the skill: test what it is likely to fake, skip, or overfit. The skill should push back by revealing weak rubrics, missing edge cases, and shortcuts the judge accidentally rewards. That tension is the loop. Each side makes the other sharper.

## The Setup

Say we generated a dependency-updater skill.

...
