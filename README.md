# Action HTML to Markdown

Convert HTML Text to Markdown Text

This action is using [turndown](https://github.com/mixmark-io/turndown)


# Usage

```
name: Convert issue body

on:
  issues:
    types:
      - opened

jobs:
  convert-issue-body:
    runs-on: ubuntu-latest
    steps:
      - name: Convert issue body to markdown
        id: html_to_markdown
        uses: lowg6/action-html-to-markdown@v0.1.0
        with:
          html-text: ${{ github.event.issue.body }}
      - name: Update issues to new body as markdown
        uses: actions-cool/issues-helper@v3
        with:
          actions: 'update-issue'
          token: ${{ secrets.GITHUB_TOKEN }}
          issue-number: ${{ github.event.issue.number }}
          body: ${{ steps.html_to_markdown.outputs.markdown-text }}
```


# License

This project is released under the MIT License.
