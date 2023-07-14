import Link from "next/link";
import "./_style/top20.css";
import { getItem, getTopStories } from "../_utils/hackerNews";

export default async function Top20Page() {
  const top500Ids = await getTopStories();
  const top20Ids = top500Ids.slice(0, 20);
  const top20 = await Promise.all(top20Ids.map((id) => getItem(id)));
  const top20Summary = top20.map((item) => ({
    id: item.id,
    title: item.title,
  }));

  return (
    <div>
      <header>
        <h1>Hacker News Viewer</h1>
      </header>
      <div id="container">
        <div id="sidebar">
          <h2>Top 20</h2>
          <nav>
            <ul>
              {top20Summary.map((item) => (
                <li key={item.id}>
                  {/* (2) タイトルをリンクにする */}
                  <Link href={`/top20/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <main>
          <div>(3) 本文をここに表示する</div>
          {/* {children} */}
        </main>
      </div>
    </div>
  );
}
