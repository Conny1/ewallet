import styled from "styled-components";

const TestimonialsContainer = styled.section`
  background-color: #e4d813;
  padding: 80px 0;
  text-align: center;
`;

const Itemcardbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const TestimonialsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #fff; /* Set heading text color to white for better contrast */
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  max-width: 100%;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const TestimonialAuthor = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Using Domestic Wire Transfer eWallet has made my money transfers hassle-free and quick. I'm impressed with the service!",
      author: "John Doe",
    },
    {
      id: 2,
      text: "The user-friendly interface and prompt customer support of Domestic Wire Transfer eWallet have exceeded my expectations. Highly recommended!",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "I've tried various eWallets, but Domestic Wire Transfer stands out for its efficiency and secure transactions. Great experience overall.",
      author: "David Johnson",
    },
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsHeading>What Our Users Say</TestimonialsHeading>
      <Itemcardbox>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </Itemcardbox>
    </TestimonialsContainer>
  );
};

export default Testimonials;
