# Example: Cognitive Bias Detector

## Input

> "We've already spent 8 months building our custom pub/sub broker in C++. It has some ordering bugs and memory leaks, but rewriting it on NATS now would waste all that invested engineering time."

## Output

### 1. Sunk Cost Fallacy
- **Evidence**: *"We've already spent 8 months... rewriting would waste all that time."*
- **Reality**: The 8 months are already spent and unrecoverable. The only question is: *Will spending the next 3 months fixing custom broker bugs cost more than a 2-week NATS integration?*

### 2. Not-Invented-Here (NIH) Syndrome
- **Evidence**: Re-implementing core messaging infrastructure rather than using mature battle-tested protocols.

### Recommendation
Evaluate remaining cost-to-production for the custom broker (including maintenance and on-call burden) strictly against NATS migration cost.
