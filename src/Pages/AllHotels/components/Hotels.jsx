import React from "react";
import {
  CardHeader,
  Pagination,
  PaginationLink,
  PaginationItem,
  Col,
  Card,
  CardBody,
} from "reactstrap";

import { AllHotelsComponent } from "../../../Components";

const HotelComponent = () => {
  return (
    <div>
      <Card>
        <CardHeader>Hotels in Our Database</CardHeader>
        <CardBody>
          <AllHotelsComponent />
          <AllHotelsComponent />
          <AllHotelsComponent />
        </CardBody>
      </Card>

      <Col md={12} sm={12} xs={12}>
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>{" "}
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </Col>
    </div>
  );
};
export default HotelComponent;
