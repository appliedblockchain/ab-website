import React from 'react';
import { IndexLayout } from '@/components/IndexLayout';
import PageTitle from '@/components/PageTitle';

function CompanyPage() {
  return (
    <IndexLayout>
      <PageTitle
        title="Our team"
        subtitle="We are a team of engineers, designers, and advisors with unique expertise in applying advances in cryptography to solve our client's business problems."
      />
    </IndexLayout>
  );
}

export default CompanyPage;
