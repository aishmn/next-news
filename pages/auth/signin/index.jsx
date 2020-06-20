import { Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/actions/authActions";
import Alert from "../../../components/alert/Alert";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const is_authenticated = useSelector((state) => state.auth.is_authenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(formData, router));
  };

  return (
    <Row
      style={{
        background: `url("https://source.unsplash.com/random")`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Alert />
      <Col bg="dark" xs={{ order: "last" }}>
        <Row className="d-flex justify-content-end ">
          <Col
            md={4}
            sm={6}
            style={{
              backgroundColor: "#14262C",
              height: "100vh",
              opacity: "0.9",
            }}
          >
            <Col>
              <div className="text-light text-center mt-3">
                <i
                  className="fa fa-bandcamp fa-3x m-2 text-warning"
                  aria-hidden="true"
                ></i>
                <h6 className="text-light p-2 h4">
                  <span className="border-bottom"> Signin, Welcome back.</span>
                </h6>
              </div>
              <div className="text-light py-4">
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      required={true}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required={true}
                      name="password"
                      value={password}
                      onChange={onChange}
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  <button className="form-control btn btn-warning">
                    <i className="fa fa-sign-in mr-1" aria-hidden="true"></i>
                    SIGNIN
                  </button>
                  <div className="pt-4 text-center">
                    <span className="text-light ">
                      Don't you have an account?{" "}
                      <Link href="/auth/signup">
                        <a className="text-danger ">
                          <i
                            className="fa fa-user-plus mr-1"
                            aria-hidden="true"
                          ></i>
                          Signup
                        </a>
                      </Link>
                    </span>
                  </div>
                </Form>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default index;
