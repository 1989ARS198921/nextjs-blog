import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from 'reactstrap'


 <Head>
        <title>{siteTitle}</title>

        <meta name="keywords" content="маникюр Рязань, классический маникюр Рязань,
        аппаратный маникюр Рязань , ногти, ногточки, сделать ногти недорого" />
        <meta name="description" content="Классический и аппаратный маникюр в городе Рязань недорого." />
        <meta charset="utf-8"/>
      </Head>
      

export default function Home( ) {
  return (
    <Layout home>


      <Container>
      <Container>
       <Row>
            <Col sm="6">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h4" class="text-secondary">Про меня </CardTitle>
                  <CardText class="text-secondary">
                   Привет меня зовут Анастасия, я мастер аппаратного и классического маникюра из города Рязани имею большой опыт и постоянно совершенствую свои навыки.
                  </CardText>
                  <Button color="danger" href="/fotos">
                    Мои работы
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm="6">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5" class="text-secondary">Обратная связь</CardTitle>
                  <CardText class="text-secondary">
                  Возможно вы хотите оставить заявку на запись , или вас интересуют вопросы сотрудничества. Буду Вам очень признательна за отзыв.
                  Теперь Вы знаете где лучший мастер ;-)...
                  </CardText>
                  <Button color="danger" href="/reviews">
                  Оставить 
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>    
      </Container>
    </Layout>
  )





}