type TopStoriesResponse = Array<string>;
export async function getTopStories(): Promise<TopStoriesResponse> {
  return fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

export async function getItem(id: string) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}
