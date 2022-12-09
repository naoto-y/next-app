import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>覚書</title>
      </Head>

      <h1 className={styles.title}>next.js覚書</h1>
      <div>
        <h2>基本事項</h2>
        <ul>
          <li>Reactベースだが、jsxは使用しない</li>
          <li>Reactがjs拡張ライブラリなのに対してnextはwebアプリフレームワークの位置づけっぽい</li>
          <li>.nextデイレクトリはdist？</li>
          <li>特殊文字はエスケープしないとビルドできないらしい</li>
        </ul>
      </div>
      <div>
        <h2>テンプレート</h2>
        <ul>
          <li>ページのテンプレートはすべてHomeメソッドの戻り値として設定される</li>
        </ul>
      </div>
      <div>
        <h2>スクリプト</h2>
        <ul>
          <li>ベースはReactなので、その書き方に準じる模様</li>
        </ul>
      </div>
      <div>
        <h2>スタイル</h2>
        <ul>
          <li>styles.クラス名でスタイルを充てる。逆にいえば、styleシートに定義していないスタイルは絶対にあたらない？</li>
          <li>使用するcssはファイルの先頭でimportする</li>
          <li>要素の親にクラスを指定すれば、定義されている子要素のスタイルは自動で反映される</li>
        </ul>
      </div>
      <div>
        <h2>ルーティング</h2>
        <ul>
          <li>pagesディレクトリ配下の階層がそのままルーティングになる。例:pages/test/aaa.js → /test/aaa</li>
        </ul>
      </div>
      <div>
        <h2>コンポーネント</h2>
        <ul>    
          <li>ファイルの先頭でimportしてから使用する</li>
          <li>コンポーネント名の頭文字は大文字という決まりのようだ。</li>
          <li>テンプレートの宣言がメソッドなので、そのpropsでテンプレートバインディングできる</li>
          <li>コンポーネントのテンプレートは必ず<></>で囲む必要があるらしい</li>
          <li>propsはコンポーネント宣言タグの属性で渡す</li>
        </ul>
      </div>
      <div>
        <h2>ライフサイクル</h2>
        <ul>
          <li>_app.jsからpageに向かって進むらしい</li>
        </ul>
      </div>
      <div>
        <h2>AJAX</h2>
        <ul>
          <li>他のjsフレームワークと同様にjQueryなりAxiosなりwindow.fetchなりを使うらしい</li>
        </ul>
      </div>
      <div>
        <h2>api</h2>
        <ul>
          <li>おそらくnodeでapiサーバーを立てるイメージ</li>
          <li>そういう意味では、完全にアプリケーションサーバーのイメージが強い</li>
          <li>基本的にはapiディレクトリの配下に置けば自動でルーティングしてくれるらしい</li>
        </ul>
      </div>
      <div>
        <h2>メモ</h2>
        <ul>
          <li>基本的にサーバーサイトレンダリングを想定しているので、バックエンドのフレームワークの使い方に近い。</li>
          <li>静的なページを作るだけならそこまで難しくないと思う。</li>
          <li>対して、ユーザーからのアクションをがあることを考えるとバックエンドよりの思考でフロントエンドのソースを書くイメージか？</li>
          <li>PHPから影響を受けたと書いてる当たり、その見当はあながち外れでもなさそうだ</li>
          <li>ReactそのものがVueと違って、単方向バインディングなので基本的にユーザーのアクションは全てformのような形で管理する？</li>
        </ul>
      </div>
    </div>
  )
}