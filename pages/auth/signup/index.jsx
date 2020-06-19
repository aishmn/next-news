import { Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/actions/authActions";
import Alert from "../../../components/alert/Alert";
const index = () => {
  const { loading, is_authenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { name, email, password, passwordConfirm } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  return (
    <>
      <Alert />
      <Row
        style={{
          background: `url("https://source.unsplash.com/random")`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Col bg="dark" xs={{ order: "last" }}>
          <Row className="d-flex justify-content-end ">
            <Col
              md={4}
              sm={6}
              style={{
                backgroundColor: "#14262C",
                minHeight: "100vh",
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
                    <span className="border-bottom">
                      Signup,
                      <i
                        className="fa fa-smile-o ml-2 mr-1"
                        aria-hidden="true"
                      ></i>
                      Welcome
                    </span>
                  </h6>
                </div>
                <div className="text-light pt-1">
                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required={true}
                      />
                    </Form.Group>
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
                        name="password"
                        value={password}
                        onChange={onChange}
                        required={true}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={onChange}
                        required={true}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <button className="form-control btn btn-warning">
                      <i
                        className="fa fa-user-plus mr-1"
                        aria-hidden="true"
                      ></i>
                      SIGNUP
                    </button>
                    <div className="pt-4 text-center">
                      <span className="text-light ">
                        Don't you have an account?{" "}
                        <Link href="/auth/signin">
                          <a className="text-danger ">
                            <i
                              class="fa fa-sign-in mr-1"
                              aria-hidden="true"
                            ></i>
                            Signin
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
    </>
  );
};

export default index;
