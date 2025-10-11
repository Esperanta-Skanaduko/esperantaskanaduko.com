import React from 'react';
import { resources } from '../../../data/resources';
import Subtitle from '../../components/subtitle';
import Title from '../../components/title';
import ExternalLink from '../../components/externalLink';
import { Resource } from '../../../data/types';
import { Link } from 'react-router-dom';

const ResourcePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Title title="Resources" />
      <Subtitle subtitle="A curated list of resources to learn and use Esperanto." />
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/library/esperanto-live-concert-videos">
          <h3 style={{ marginBottom: '0.5rem' }}>Esperanto Live Concert Videos</h3>
        </Link>
        <p>A collection of live concert videos from various Esperanto musicians.</p>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {resources.map((resource: Resource, index: number) => (
          <li key={index} style={{ marginBottom: '1.5rem' }}>
            <ExternalLink href={resource.url}>
              <h3 style={{ marginBottom: '0.5rem' }}>{resource.title}</h3>
            </ExternalLink>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcePage;
