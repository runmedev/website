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

You generated a skill. Good. That is the easy part.

LLMs are not generating bad skills because they are careless, or because they misunderstand what a skill is supposed to be. They are doing exactly what they were trained to do: infer the most likely behavior from the context in front of them. Given one repo, one task, and one successful outcome, they will often produce a skill that recreates that outcome beautifully.

That is also the problem.

A generated skill can look correct while being too specific to the moment that produced it. It may work once, in one repo, under one set of assumptions.

## When Agents Generate Context Blind

What makes it sting is that the eval has the same problem: it can certify the very overfit it was supposed to catch. If the same model generated both the skill and the test, the eval is not yet an impartial judge. That is like asking a team to referee its own game.

A good eval should push against the skill: test what it is likely to fake, skip, or overfit. The skill should push back by revealing weak rubrics, missing edge cases, and shortcuts the judge accidentally rewards. That tension is the loop. Each side makes the other sharper.

Let's make that concrete.

## The Setup

Say we generated a dependency-updater skill.

...
