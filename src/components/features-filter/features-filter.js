import FeatureRadio from "../feature-radio/feature-radio";
import "./features-filter.scss";

const FeaturesFilter = () => {
return (
<>
<div className="features-filter">
<FeatureRadio name="radio">All</FeatureRadio>
<FeatureRadio name="radio">UI</FeatureRadio>
<FeatureRadio name="radio">UX</FeatureRadio>
<FeatureRadio name="radio">Enhancement</FeatureRadio>
<FeatureRadio name="radio">Bug</FeatureRadio>
<FeatureRadio name="radio">Feature</FeatureRadio>
</div>
</>
);
}
export default FeaturesFilter;