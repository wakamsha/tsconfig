/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["./CHANGELOG.md"],
        message: "chore: release ${nextRelease.gitTag}\n\n[skip ci]",
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
};
