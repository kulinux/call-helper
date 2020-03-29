package callhelper

import cats.effect.IO
import com.twitter.finagle.{Http, Service}
import com.twitter.finagle.http.{Request, Response}
import com.twitter.util.Await
import io.finch._
import io.finch.catsEffect._
import io.finch.circe._
import io.circe.generic.auto._

object Main extends App {


  case class Page(totalResult: Int, page: Int, numberOfPages: Int)
  case class Item(id: String, name: String)
  case class Message(page: Page, result: Seq[Item])

  def healthcheck: Endpoint[IO, String] = get(pathEmpty) {
    Ok("OK")
  }


  def search: Endpoint[IO, Message] = get("search" :: param[String]("q")) { q: String =>
    Ok(Message(
      Page(33, 1, 5),
      Seq(
        Item("id1", "name1"),
        Item("id2", "name2")
      )

    ))
  }

  def service: Service[Request, Response] = Bootstrap
    .serve[Text.Plain](healthcheck)
    .serve[Application.Json](search)
    .toService

  Await.ready(Http.server.serve(":8081", service))
}