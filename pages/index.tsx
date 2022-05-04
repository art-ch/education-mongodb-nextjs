/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card, CardDescription } from 'semantic-ui-react';

const Index = ({ notes }: any) => {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {notes.map((note: any) => {
          const { _id, title, body } = note;
          return (
            <div key={_id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${_id}`}>
                      <a>{title}</a>
                    </Link>
                  </Card.Header>
                  <Card.Description>{body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${_id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${_id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data };
};

export default Index;
