# showseeker-challenge-2023

In our data grid, users can change the days of the week a current line would air on TV; it is a simple editable input box that they can type in their desired days.

## Scope

The function should be able to handle the following.

1. Accept days in the following formats

```
    m,t,w,th,f,s,su
    mon, tue, etc
    monday, tuesday, etc
```

2. The event should not be case sensitive
3. A dash (-) should be allowed for consecutive days (m-w = Monday, Tuesday, Wednesday)
4. Commas would allow individual days (th,s,su = Thursday, Saturday Sunday)
5. The dash and comma can be combined (m-w,s,su = Monday, Tuesday, Wednesday, Saturday, Sunday)
6. The function should return numbers to represent the days, Sunday being 1 and Saturday being 7
7. It should not matter what order the days, dashes, or commas are in. (th,m-w,su)
