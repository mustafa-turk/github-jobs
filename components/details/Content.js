import styled from 'styled-components';
import { find, startCase } from 'lodash';
import Skeleton from 'react-loading-skeleton';
import { StarFillIcon } from 'components/shared/icons';
import useFavourites from 'hooks/useFavourites';

export default function Content({ loading, details }) {
  const { favourites, setFavourites } = useFavourites();

  if (loading) return <ContentLoading />;

  const isFaved = find(favourites, (fav) => fav.id === details.id);
  const href = details['how_to_apply'].split('href="').pop().split('"')[0];
  return (
    <div>
      <Header>
        <Heading>{details.title}</Heading>
        <SubHeading>
          <CompanyLink
            href={details.company_url}
            rel="noopener noreferrer"
            target="_blank"
          >{`${details.company}`}</CompanyLink>
          {` - ${startCase(details.location)}`}
        </SubHeading>
        <p></p>
      </Header>
      <Actions>
        <ApplyButtonLink href={href} rel="noopener noreferrer" target="_blank">
          <ApplyButton>Apply now</ApplyButton>
        </ApplyButtonLink>
        <SaveButton
          aria-label="Add to favourites"
          isFaved={isFaved}
          onClick={() => setFavourites(details)}
        >
          <StarFillIcon size="19px" />
        </SaveButton>
      </Actions>
      <Description>
        <DescriptionHeading>Description</DescriptionHeading>
        <div dangerouslySetInnerHTML={{ __html: details.description }} />
      </Description>
    </div>
  );
}

function ContentLoading() {
  return (
    <div>
      <div>
        <Heading>
          <Skeleton />
        </Heading>
        <SubHeading>
          <Skeleton />
          <Skeleton />
        </SubHeading>
      </div>
      <Description>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Description>
    </div>
  );
}

const Header = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 23px;
  }
`;

const SubHeading = styled.p`
  font-size: 19px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const CompanyLink = styled.a`
  color: ${(p) => p.theme.colors.blue.dark};
`;

const Actions = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ApplyButtonLink = styled.a`
  margin-right: 10px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    flex: 1;
  }
`;

const ApplyButton = styled(Button)`
  background: ${(p) => p.theme.colors.blue.dark};
  color: white;
  font-weight: 500;
  padding: 10px 40px;
  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const SaveButton = styled(Button)`
  transition: background 0.2s ease, color 0.3s ease;
  background: ${(p) => (p.isFaved ? p.theme.colors.yellow.light : p.theme.colors.gray.light)};
  color: ${(p) => (p.isFaved ? p.theme.colors.yellow.dark : p.theme.colors.gray.dark)};
`;

const Description = styled.div`
  margin-top: 30px;
  h1,
  h2 {
    margin-bottom: 10px;
    font-weight: 500;
  }
  strong {
    font-weight: 500;
    display: block;
  }
  p {
    margin: 15px 0;
  }
  ul {
    list-style-type: circle;
    padding-left: 20px;
    margin-bottom: 15px;
  }
`;

const DescriptionHeading = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
