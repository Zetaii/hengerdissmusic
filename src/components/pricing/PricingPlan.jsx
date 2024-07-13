import StarImg from "../../assets/images/v1/star2.png"
import PricingCard from "./PricingCard"
import { useState } from "react"
const pricingPlanData = [
  {
    id: crypto.randomUUID(),
    title: "Singing Package",
    price: [
      { id: 1, value: 299 },
      {
        id: 2,
        value: 399,
      },
    ],
    description:
      "Singing package typically includes a comprehensive set of brand's identity",
    features: [
      "Consultation & Discovery",
      "Singing & Brand Strategy",
      "Song Title & Tagline Creation",
      "Vocal Design",
      "Song Launch Support",
    ],
    highlighted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Composement Package",
    price: [
      { id: 1, value: 399 },
      {
        id: 2,
        value: 499,
      },
    ],
    description:
      "Composement package typically includes composing and vocal design.",
    features: [
      "Consultation & Discovery",
      "Instrumental & Vocal Design",
      "Client Design Flair",
      "Song Launch Support",
      "Previous Package Inclusions",
    ],
    highlighted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Full Package",
    price: [
      { id: 1, value: 499 },
      {
        id: 2,
        value: 599,
      },
    ],
    description:
      "Branding package typically includes a comprehensive set of brand's identity",
    features: [
      "Consultation & Discovery",
      "Visual Design",
      "Art Direction",
      "Graphic Design",
      "Previous Package Inclusions",
    ],
    highlighted: false,
  },
]
function PricingPlan() {
  const frequencies = [
    { id: 1, label: "Annually" },
    { id: 2, label: "Monthly" },
  ]

  const [frequency, setFrequency] = useState(frequencies[0])

  function handleChange(e) {
    if (e.target.checked) {
      setFrequency(frequencies[1])
    } else {
      setFrequency(frequencies[0])
    }
  }

  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-pricing-title">
          <h2>
            Pick from one of our
            <span className="aximo-title-animation">
              ready packages
              <span className="aximo-title-icon">
                <img className="star-img" src={StarImg} alt="star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="pricing-btn">
          <label>Billed monthly</label>
          <div className="toggle-btn">
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              onChange={handleChange}
            />
          </div>
          <label>Billed annually</label>
        </div>
        <div className="row" id="table-price-value">
          {pricingPlanData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} frequency={frequency} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default PricingPlan
