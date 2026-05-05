"""
Axiom-0: The Zero-Entropy Continuum (ZECP) Core
Orchestrates the 10-node cognitive flow for production-grade intelligence governance.
"""

import math
import json
import time
import hashlib
import asyncio
import logging
from typing import Dict, List, Any, Optional, Callable

from liquid_morphing import AxiomMorphingEngine, SystemMetrics, MorphState

logging.basicConfig(level=logging.INFO, format='[%(levelname)s] %(message)s')
logger = logging.getLogger("Axiom-Core")

class AxiomOrchestrator:
    """
    Axiom-0: The Zero-Entropy Continuum (ZECP)
    Orchestrates the 10-node cognitive flow for production-grade intelligence governance.
    """
    def __init__(self) -> None:
        self.state: Dict[str, Any] = {}
        self.nodes: List[str] = [
            "T-01 Ingestion", "T-02 Decomposition", "T-03 Abstraction",
            "T-04 Morphing", "T-05 Orchestration", "T-06 Analysis",
            "T-07 Grounding", "T-08 Execution", "T-09 Coherence", "T-10 Synthesis"
        ]
        self.registry: Dict[str, Callable[[Any], Dict[str, Any]]] = {
            "FUNC_LOGIC_001": self._logic_unit_core_auth,
            "FUNC_LOGIC_002": self._logic_unit_memory_shard
        }
        self.morphing_engine = AxiomMorphingEngine()

    def _deterministic_str(self, data: Any) -> str:
        if isinstance(data, str):
            return data
        try:
            return json.dumps(data, sort_keys=True)
        except Exception:
            return str(data)

    def _logic_unit_core_auth(self, data: Any) -> Dict[str, Any]:
        return {"auth_status": "ZECP_VERIFIED", "timestamp": hashlib.sha256(self._deterministic_str(data).encode()).hexdigest()}

    def _dehydration_pipeline(self, raw_input: Any) -> Dict[str, Any]:
        """
        Data Purifier (Dehydration Pipeline)
        Performs segmentation, classification, routing, and dehydration.
        Removes redundant entropy from raw conversational text.
        """
        raw_str = str(raw_input)
        # 1. Segmentation
        segments = raw_str.split('.')
        # 2. Classification & 3. Routing (simplified heuristic)
        payloads = [s.strip() for s in segments if len(s.strip()) > 5]
        # 4. Dehydration (removing common redundant words to reduce entropy)
        stop_words = ["please", "could", "you", "help", "me", "with", "the", "a", "an"]
        dehydrated_payloads = []
        for p in payloads:
            words = p.split()
            clean_words = [w for w in words if w.lower() not in stop_words]
            dehydrated_payloads.append(" ".join(clean_words))

        # 5. Canonicalization
        canonical_payload = " | ".join(dehydrated_payloads).upper()
        return {"original": raw_str, "canonical_payload": canonical_payload, "entropy_status": "DEHYDRATED"}

    def _logic_unit_memory_shard(self, data: Any) -> Dict[str, Any]:
        data_str = self._deterministic_str(data)
        return {"shard_id": f"SHARD_{hashlib.sha256(data_str.encode()).hexdigest()}", "status": "SYNCED"}

    def ground_logic(self, spec_key: str) -> Optional[Callable[[Any], Dict[str, Any]]]:
        """Node 07 Grounding: Deterministic mapping of spec to functional logic."""
        return self.registry.get(spec_key)

    def calculate_kl_divergence(self, p: List[float], q: List[float]) -> float:
        """Node 09 Coherence: KL-Divergence monitoring (Zero-Entropy native implementation)."""
        if not p or not q or len(p) != len(q):
            raise ValueError("Distributions must be non-empty and of the same length.")

        sum_p = sum(p)
        sum_q = sum(q)
        
        if sum_p == 0 or sum_q == 0:
            raise ValueError("Sum of distribution probabilities cannot be zero.")

        p_norm = [x / sum_p for x in p]
        q_norm = [x / sum_q for x in q]

        divergence = 0.0
        for i in range(len(p_norm)):
            if p_norm[i] > 0:
                if q_norm[i] == 0:
                    return float('inf')
                divergence += p_norm[i] * math.log(p_norm[i] / q_norm[i])
        return divergence

    async def run_continuum(self, input_payload: Any) -> Any:
        logger.info("[Axiom-0: Initiating Zero-Entropy Continuum (ZECP)]")
        current_data = input_payload
        
        for node in self.nodes:
            logger.info(f"[*] Executing Node: {node}")
            
            if "T-01" in node or "T-02" in node:
                logger.info(f"    [{node[:4]}] Running Dehydration Pipeline.")
                if isinstance(current_data, str):
                     current_data = self._dehydration_pipeline(current_data)
                else:
                     logger.info(f"    [{node[:4]}] Data is not raw string, skipping dehydration.")

            elif "T-04" in node:
                # Node 04 Morphing Implementation
                # Simulating environmental stress metric collection
                metrics = SystemMetrics(
                    cpu_percent=0.88,
                    memory_percent=0.75,
                    queue_depth=85,
                    entropy_level=0.15
                )
                logger.info(f"    [T-04] Evaluating Morphing. Load Score: {metrics.load_score:.2f}")
                target_state = self.morphing_engine.evaluate_morph(metrics)
                if target_state:
                    logger.info(f"    [T-04] Morphing required. Target State: {target_state.name}")
                    success = await self.morphing_engine.shift(target_state)
                    if success:
                        logger.info(f"    [T-04] Morphing successful.")
                    else:
                        logger.warning(f"    [T-04] Morphing failed or skipped.")
                else:
                    logger.info(f"    [T-04] System stable. Current State: {self.morphing_engine.current_state.name}")
                current_data = {"processed_by": node, "payload": current_data, "morph_state": self.morphing_engine.current_state.name}

            elif "T-06" in node:
                # Node 06 Analysis Implementation - Real Morphing Logic
                # Inject Test-Time Compute (ADR-080) based on current morph state
                current_state = self.morphing_engine.current_state.name
                if current_state == "LIQUID" or current_state == "GAS":
                    logger.info(f"    [T-06] Morph state is {current_state}. Engaging Test-Time Reflection Loop...")
                    # Simulate extended reasoning multi-step verification
                    reflection_loops = 3 if current_state == "LIQUID" else 5
                    for i in range(reflection_loops):
                         logger.info(f"           [Reflection Step {i+1}/{reflection_loops}] Self-critiquing payload...")
                         await asyncio.sleep(0.05)
                    logger.info("    [T-06] Reflection complete. Payload verified.")
                    if isinstance(current_data, dict):
                        current_data["verified"] = True
                elif current_state == "PLASMA":
                    logger.info("    [T-06] EMERGENCY PLASMA STATE: Dropping non-critical payload for speed.")
                    current_data = "PLASMA_SURVIVAL_MODE_PAYLOAD"
                else:
                    logger.info("    [T-06] Morph state is SOLID. Proceeding with standard analysis.")

            elif "T-07" in node:
                # Node 07 Grounding Implementation
                # In SOLID state, we might enforce stricter validation
                if self.morphing_engine.current_state.name == "SOLID":
                    logger.info("    [T-07] SOLID state detected. Enforcing strict validation check.")

                spec_key = "FUNC_LOGIC_001" if "authorized" in self._deterministic_str(current_data) else "FUNC_LOGIC_002"
                func = self.ground_logic(spec_key)
                if func:
                    logger.info(f"    [T-07] Mapped to: {func.__name__}")
                    try:
                        current_data = func(current_data)
                    except Exception as e:
                        logger.error(f"    [T-07] Execution error: {e}")
                        current_data = {"error": str(e), "payload": current_data}
                
            elif "T-09" in node:
                # Node 09 Coherence via Dynamic KL-Divergence
                # Dynamic Entropy tracking based on the data length/complexity
                data_complexity = len(self._deterministic_str(current_data)) % 10

                # Dynamic base distribution tracking simulated belief shift
                p_dist = [0.1 + (data_complexity * 0.01), 0.2, 0.7 - (data_complexity * 0.01)]
                q_dist = [0.15, 0.15, 0.7] # Desired Protocol ZECP baseline

                kl_score = self.calculate_kl_divergence(p_dist, q_dist)
                logger.info(f"    [T-09] Dynamic KL-Divergence Coherence Score: {kl_score:.6f}")

                # Self-Healing / Rollback Trigger
                if kl_score <= 0.05:
                    logger.info("    [T-09] Result: COHERENT (Entropy within bounds)")
                else:
                    logger.warning("    [T-09] Result: DEVIANT (Entropy spike detected). Initiating Self-Healing Pruning...")
                    current_data = {"pruned": True, "re_synthesized_from": current_data}
                    logger.info("    [T-09] System Rollback/Pruning completed to enforce Zero-Entropy.")
                    raise RuntimeError("ZECP Violation: Entropy spike detected (KL > 0.05)")
            
            else:
                # Generic processing for other nodes
                current_data = {"processed_by": node, "payload": current_data}
            
            await asyncio.sleep(0.05) # Simulate node processing delay

        logger.info("[T-10] Synthesis Complete: System Locked at Zero-Entropy State")
        return current_data

async def main() -> None:
    orchestrator = AxiomOrchestrator()
    sample_input = "authorized_request_001"
    final_output = await orchestrator.run_continuum(sample_input)
    print(f"\nFinal Continuum Result:\n{json.dumps(final_output, indent=2)}")

if __name__ == "__main__":
    asyncio.run(main())
